import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-quiz-gradient" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Terms & Conditions</h1>
          <p className="text-white/90 max-w-3xl">
            Please read these Terms carefully. By accessing or using Brain Brew, you agree to be bound by them.
          </p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>1. Use of Service</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>Our platform provides assessments and informational content. Results are for educational purposes only and do not constitute medical, psychological, or legal advice.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>2. Accounts & Security</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. Notify us immediately of any unauthorized access or suspected breach.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>3. Acceptable Use</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>Do not misuse the service, interfere with its operation, attempt unauthorized access, or use it in violation of applicable laws.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>4. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>All content, trademarks, and software are the property of Brain Brew or its licensors and are protected by intellectual‑property laws.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>5. Disclaimers & Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>The service is provided on an "as is" and "as available" basis without warranties of any kind. To the maximum extent permitted by law, Brain Brew is not liable for any indirect, incidental, special, or consequential damages.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>6. Termination</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>We may suspend or terminate your access if you violate these Terms or if necessary to protect the platform, other users, or our rights.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>7. Changes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>We may update these Terms from time to time. Material changes will be noted on this page. Continued use after changes signifies acceptance.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>8. Contact</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>
                Questions about these Terms? Email <a href="mailto:support@brainbrew.app" className="text-primary hover:underline">support@brainbrew.app</a> or visit our <Link to="/contact" className="text-primary hover:underline">Contact</Link> page.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
