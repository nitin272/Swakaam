import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User,
  Bell,
  Lock,
  Globe,
  CreditCard,
  Building2,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Upload
} from "lucide-react";

export default function SettingsPage() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - replace with real data from API
  const settings = {
    profile: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      bio: "Experienced professional with a passion for innovation.",
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      marketingEmails: false,
      projectUpdates: true,
      paymentNotifications: true,
    },
    security: {
      twoFactorAuth: false,
      loginNotifications: true,
      sessionManagement: true,
    },
    billing: {
      plan: "Pro",
      paymentMethod: "Visa ending in 4242",
      billingAddress: "123 Business St, San Francisco, CA 94105",
      nextBillingDate: "2024-04-01",
    },
  };

  const handleSave = async (section) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Show success message
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button disabled={isLoading}>Save Changes</Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={settings.profile.avatar} alt={settings.profile.name} />
                  <AvatarFallback>{settings.profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Change Avatar
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={settings.profile.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={settings.profile.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue={settings.profile.phone} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue={settings.profile.location} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" defaultValue={settings.profile.bio} />
              </div>
            </CardContent>
          </Card>

          {/* Role-specific settings */}
          {user?.role === "company" && (
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="Tech Corp" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" defaultValue="Technology" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="www.techcorp.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Company Size</Label>
                    <Input id="size" defaultValue="50-200" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {user?.role === "freelancer" && (
            <Card>
              <CardHeader>
                <CardTitle>Freelancer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills</Label>
                    <Input id="skills" defaultValue="React, Node.js, TypeScript" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                    <Input id="hourlyRate" type="number" defaultValue="75" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Input id="availability" defaultValue="Full-time" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio URL</Label>
                    <Input id="portfolio" defaultValue="www.johndoe.com" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch defaultChecked={settings.notifications.emailNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications
                  </p>
                </div>
                <Switch defaultChecked={settings.notifications.pushNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive marketing and promotional emails
                  </p>
                </div>
                <Switch defaultChecked={settings.notifications.marketingEmails} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Project Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about your projects
                  </p>
                </div>
                <Switch defaultChecked={settings.notifications.projectUpdates} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Payment Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about payments
                  </p>
                </div>
                <Switch defaultChecked={settings.notifications.paymentNotifications} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch defaultChecked={settings.security.twoFactorAuth} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Login Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when someone logs into your account
                  </p>
                </div>
                <Switch defaultChecked={settings.security.loginNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Session Management</Label>
                  <p className="text-sm text-muted-foreground">
                    Manage your active sessions
                  </p>
                </div>
                <Switch defaultChecked={settings.security.sessionManagement} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Current Plan</Label>
                <p className="text-sm text-muted-foreground">{settings.billing.plan}</p>
              </div>
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <p className="text-sm text-muted-foreground">{settings.billing.paymentMethod}</p>
              </div>
              <div className="space-y-2">
                <Label>Billing Address</Label>
                <p className="text-sm text-muted-foreground">{settings.billing.billingAddress}</p>
              </div>
              <div className="space-y-2">
                <Label>Next Billing Date</Label>
                <p className="text-sm text-muted-foreground">{settings.billing.nextBillingDate}</p>
              </div>
              <Button variant="outline">Update Payment Method</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 