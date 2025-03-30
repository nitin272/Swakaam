import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>{project.budget}</span>
              <span>•</span>
              <span>{project.postedTime}</span>
              <span>•</span>
              <span>{project.proposals} proposals</span>
            </div>
          </div>
          <Button variant="outline" className="shrink-0">
            Save
          </Button>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src={project.client.avatar} 
                alt={project.client.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-gray-900">{project.client.name}</div>
              <div className="text-sm text-gray-500">{project.client.location}</div>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
} 