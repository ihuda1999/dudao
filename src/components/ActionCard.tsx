import React from 'react';
import { ArrowRight, FileText, BarChart3 } from 'lucide-react';

interface ActionCardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  url: string;
  buttonText: string;
}

export function ActionCard({ title, description, icon, url, buttonText }: ActionCardProps) {
  return (
    <div className="bg-white rounded-[16px] p-5 shadow-sm border border-gray-100 flex items-center justify-between transition-all hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-600">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {description && <p className="text-sm text-gray-500 mt-0.5">{description}</p>}
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-full hover:bg-red-50 transition-colors shrink-0"
      >
        {buttonText}
      </a>
    </div>
  );
}
