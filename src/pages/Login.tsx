import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success → redirect to home with hash so landing starts IQ
    navigate('/#start-iq', { replace: true });
  };

  return (
    <Layout hideFooter hideNavActions>
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4">
        <div className="w-full max-w-[444px] bg-white rounded-2xl shadow-2xl ring-1 ring-border/60 p-5 md:p-6">
          <div className="text-center mb-7">
            <h1 className="text-3xl font-bold tracking-tight">Log In <span className="align-middle">👋</span></h1>
            <p className="text-sm text-muted-foreground mt-2 font-medium">Welcome back! Please sign in to your account.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-11 rounded-xl border border-input px-4 bg-white placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <Button type="submit" className="w-full h-11 rounded-xl text-base" variant="hero">Log In</Button>
          </form>
          <div className="text-center text-sm text-muted-foreground mt-5 font-medium">
            Don&apos;t have an account? <button onClick={() => navigate('/#start-iq', { replace: true })} className="text-primary underline-offset-2 hover:underline font-medium">Start a quiz</button>
          </div>
          <div className="flex items-center gap-3 my-5">
            <div className="h-px bg-border flex-1" />
            <span className="text-xs text-muted-foreground">Or continue with</span>
            <div className="h-px bg-border flex-1" />
          </div>
          <div className="space-y-3">
            <Button variant="outline" className="w-full h-11 rounded-xl justify-start gap-3 px-4 hover:bg-muted/50">
              <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.6l6.9-6.9C35.9 2.2 30.38 0 24 0 14.62 0 6.51 5.38 2.56 13.2l8.02 6.23C12.3 13.43 17.69 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.5 24c0-1.64-.15-3.21-.44-4.72H24v9.02h12.7c-.55 2.99-2.2 5.52-4.7 7.22l7.2 5.59C43.91 37.52 46.5 31.3 46.5 24z"/>
                <path fill="#FBBC05" d="M10.58 28.57A14.49 14.49 0 0 1 9.5 24c0-1.58.27-3.1.76-4.51l-8.02-6.23C.8 16.17 0 20 0 24s.8 7.83 2.24 10.74l8.34-6.17z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.14 15.9-5.82l-7.2-5.59c-2.02 1.36-4.61 2.16-8.7 2.16-6.31 0-11.7-3.93-13.42-9.93l-8.34 6.17C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span className="font-medium">Sign in with Google</span>
            </Button>
            <Button variant="outline" className="w-full h-11 rounded-xl justify-start gap-3 px-4 hover:bg-muted/50">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#00A4EF" d="M1 1h10v10H1z"/>
                <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                <path fill="#FFB900" d="M1 13h10v10H1z"/>
                <path fill="#F25022" d="M13 13h10v10H13z"/>
              </svg>
              <span className="font-medium">Sign in with Microsoft</span>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;


