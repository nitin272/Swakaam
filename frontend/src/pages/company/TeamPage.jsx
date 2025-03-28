import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  Plus,
  Mail,
  Phone,
  MapPin,
  Building2,
  MoreVertical,
  UserPlus
} from "lucide-react";

export default function CompanyTeamPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  // Mock data - replace with real data from API
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Senior Frontend Developer",
      department: "Engineering",
      email: "john.doe@company.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      status: "active",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      joinDate: "Jan 2023"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      department: "Design",
      email: "jane.smith@company.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      status: "active",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      joinDate: "Mar 2023"
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Product Manager",
      department: "Product",
      email: "mike.johnson@company.com",
      phone: "+1 (555) 345-6789",
      location: "Remote",
      status: "active",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      joinDate: "Jun 2023"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "Marketing Manager",
      department: "Marketing",
      email: "sarah.wilson@company.com",
      phone: "+1 (555) 456-7890",
      location: "Los Angeles, CA",
      status: "on_leave",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      joinDate: "Sep 2023"
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = departmentFilter === "all" || member.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Team</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search team members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Product">Product</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{member.department}</Badge>
                      <Badge variant={member.status === "active" ? "success" : "secondary"}>
                        {member.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground">Joined {member.joinDate}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{member.location}</span>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button variant="outline" size="sm">View Profile</Button>
                <Button variant="outline" size="sm">Edit Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 