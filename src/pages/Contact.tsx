import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, PhoneCall, Send } from 'lucide-react';

const Contact = () => {
  const handleScrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* On-brand gradient background to match hero */}
        <div className="absolute inset-0 bg-quiz-gradient" />
        {/* Decorative blurs for depth */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(ellipse at top left, rgba(255,255,255,0.15), transparent 40%), radial-gradient(ellipse at bottom right, rgba(0,0,0,0.25), transparent 45%)' }} />
        <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Have a question or need assistance? We’re here to help.
          </p>
          <Button size="lg" onClick={handleScrollToForm} className="px-8">
            Start Conversation
          </Button>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left: Form */}
          <Card id="contact-form" className="shadow-soft">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your message..." className="min-h-[140px]" />
              </div>
              <div className="pt-2">
                <Button className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right: Info */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Visit Our Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-primary mt-0.5" /> 221B Baker Street, London, UK</div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +44 20 7946 0958</div>
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> support@brainbrew.app</div>
                <div className="mt-4 h-40 rounded-md bg-muted flex items-center justify-center text-xs">Map placeholder</div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Immediate Assistance</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>Need urgent help? Our team is available 24/7.</p>
                  <Button className="w-full" variant="hero">
                    <PhoneCall className="h-4 w-4 mr-2" /> Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Monday–Friday: 9:00 AM – 8:00 PM</div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Saturday: 10:00 AM – 6:00 PM</div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Sunday: 12:00 PM – 5:00 PM</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;


