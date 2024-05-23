import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar.jsx";

function Testimonials() {
  return (
    <section className="mb-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Testimonials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <Avatar className="mr-4">
              <AvatarImage src="https://via.placeholder.com/150" alt="User 1" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">John Doe</p>
              <p>"The flowers were absolutely beautiful and arrived right on time. My wife loved them!"</p>
            </div>
          </div>
          <div className="flex items-center">
            <Avatar className="mr-4">
              <AvatarImage src="https://via.placeholder.com/150" alt="User 2" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Jane Smith</p>
              <p>"Amazing service and stunning flowers. Will definitely order again!"</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default Testimonials;
