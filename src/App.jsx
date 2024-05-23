import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar.jsx";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip.jsx";
import { Toaster } from "@/components/ui/toaster.jsx";
import { useToast } from "@/components/ui/toaster.jsx";
import Testimonials from "@/components/ui/Testimonials.jsx";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const handleSubscribe = () => {
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 text-gray-800">
      <header className="py-8">
        <h1 className="text-5xl font-bold text-center">Love Blooms</h1>
        <p className="text-center text-xl mt-4">Send flowers to your loved ones on Valentine's Day and Anniversaries</p>
      </header>

      <main className="px-4 py-8">
        <section className="mb-12">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">At Love Blooms, we believe in making every moment special. Our flowers are handpicked and arranged by expert florists to ensure the highest quality and freshness. Whether it's Valentine's Day or your anniversary, we have the perfect bouquet for you.</p>
              <div className="flex justify-center mt-4">
                <Badge variant="outline" className="mr-2">
                  Fresh Flowers
                </Badge>
                <Badge variant="outline" className="mr-2">
                  Expert Florists
                </Badge>
                <Badge variant="outline">Timely Delivery</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Testimonials />
        </section>

        <section className="mb-12">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Subscribe to Our Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4" />
                <Textarea placeholder="Leave a message (optional)" value={message} onChange={(e) => setMessage(e.target.value)} className="mb-4" />
                <Button onClick={handleSubscribe}>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-8 text-center">
        <p>&copy; 2023 Love Blooms. All rights reserved.</p>
      </footer>

      <Toaster />
    </div>
  );
}

export default App;
