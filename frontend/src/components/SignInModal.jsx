import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-indigo-500 to-purple-500">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/logo.svg" alt="Swakaam" className="h-8 invert" />
          </div>
        </div>
        
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Welcome Back</DialogTitle>
          </DialogHeader>

          <div className="mt-8 space-y-4">
            <Button 
              variant="outline" 
              className="w-full py-6 flex items-center justify-center gap-3 border-2 hover:bg-gray-50"
            >
              <img src="/google.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </Button>

            <Button 
              variant="outline" 
              className="w-full py-6 flex items-center justify-center gap-3 border-2 hover:bg-gray-50"
            >
              <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
              Continue with GitHub
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" className="mt-1.5" />
              </div>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Sign In
              </Button>
            </div>

            <div className="text-center text-sm">
              <a href="#" className="text-indigo-600 hover:text-indigo-700">Forgot password?</a>
            </div>

            <div className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Sign up</a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 