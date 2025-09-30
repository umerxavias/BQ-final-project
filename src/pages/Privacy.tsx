import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-quiz-gradient" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-white/90 max-w-3xl">
            This Privacy Policy describes how Brain Brew collects, uses, and protects your information when you use our website and services.
          </p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>• Account Information: name, email address, and authentication identifiers.</p>
              <p>• Usage Data: pages viewed, test interactions, device/browser details, and approximate location derived from IP.</p>
              <p>• User Inputs: assessment responses, preferences, and feedback you choose to provide.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>• To deliver and personalize assessments, scores, and insights.</p>
              <p>• To operate, maintain, and secure our platform.</p>
              <p>• To analyze aggregated usage and improve features, performance, and content.</p>
              <p>• To communicate updates, respond to inquiries, and provide support.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>3. Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>We do not sell your personal information. We may share information with vetted service providers (e.g., cloud hosting, analytics, error monitoring) under strict confidentiality and data‑protection agreements. We may also disclose information to comply with law, protect our rights, or prevent abuse.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>4. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>We retain information only for as long as necessary to provide our services and meet legal or regulatory obligations. You may request deletion of your account and associated data, subject to certain legal requirements.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>5. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>Depending on your location, you may have the right to access, correct, delete, or export your data, and to object to or restrict certain processing. We will honor applicable requests in accordance with local law.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>6. Security</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>We use administrative, technical, and organizational safeguards to protect information. While no method of transmission or storage is 100% secure, we continually improve our protections and monitor for potential risks.</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>7. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>
                Questions about this policy? Email <a href="mailto:support@brainbrew.app" className="text-primary hover:underline">support@brainbrew.app</a> or visit our <Link to="/contact" className="text-primary hover:underline">Contact</Link> page.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
