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
import { 
  Search, 
  Filter, 
  Briefcase,
  Users,
  Building2,
  MapPin,
  DollarSign,
  Clock
} from "lucide-react";

export default function CompanyHiringPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  // Mock data - replace with real data from API
  const positions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      applicants: 24,
      status: "active",
      description: "We are looking for an experienced Frontend Developer to join our team...",
      requirements: [
        "5+ years of React experience",
        "Strong TypeScript skills",
        "Experience with Next.js",
        "Excellent communication skills"
      ]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      applicants: 18,
      status: "active",
      description: "Join our design team to create beautiful and intuitive user interfaces...",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma",
        "Portfolio demonstrating user-centered design",
        "Experience with design systems"
      ]
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      applicants: 32,
      status: "closed",
      description: "Lead product development initiatives and drive innovation...",
      requirements: [
        "5+ years of product management experience",
        "Strong analytical skills",
        "Experience with agile methodologies",
        "Excellent stakeholder management"
      ]
    }
  ];

  const filteredPositions = positions.filter(position => {
    const matchesSearch = position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         position.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = departmentFilter === "all" || position.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hiring</h1>
        <Button>Post New Position</Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search positions..."
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

      {/* Positions Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredPositions.map((position) => (
          <Card key={position.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{position.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{position.department}</Badge>
                    <Badge variant={position.status === "active" ? "success" : "secondary"}>
                      {position.status}
                    </Badge>
                  </div>
                </div>
                <Button variant="outline">View Applicants</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{position.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{position.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{position.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{position.applicants} applicants</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{position.description}</p>
                <div>
                  <h4 className="text-sm font-medium mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button variant="outline">Edit Position</Button>
                <Button variant="destructive">Close Position</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 