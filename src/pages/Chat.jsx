import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Image as ImageIcon, Bot, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your medical assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const { toast } = useToast();

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;

    const newMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      image: selectedImage || undefined,
    };

    setMessages([...messages, newMessage]);
    setInput("");
    setSelectedImage(null);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat-gemini", {
        body: {
          messages: [...messages, newMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        },
      });

      if (error) throw error;

      const aiResponse = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-8">
        <div className="max-w-4xl mx-auto h-[calc(100vh-200px)] flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Medical Chat Assistant</h1>
            <p className="text-muted-foreground">Ask questions about your health concerns</p>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 rounded-lg border bg-card p-4 mb-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.image && (
                      <img
                        src={message.image}
                        alt="Uploaded"
                        className="rounded-lg mb-2 max-w-full h-auto"
                      />
                    )}
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>

                  {message.role === "user" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-secondary" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm">Thinking...</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="border rounded-lg bg-card p-4">
            {selectedImage && (
              <div className="mb-3 relative inline-block">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="rounded-lg max-h-32 object-cover"
                />
                <Button
                  size="sm"
                  variant="destructive"
                  className="absolute top-2 right-2"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </Button>
              </div>
            )}
            
            <div className="flex gap-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageSelect}
                accept="image/*"
                className="hidden"
              />
              
              <Button
                size="icon"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImageIcon className="h-5 w-5" />
              </Button>

              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
              />

              <Button onClick={handleSend} size="icon" disabled={isLoading}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chat;
