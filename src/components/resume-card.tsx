"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  return (
    <div className="mb-6 last:mb-0"> {/* Matches vertical spacing from image */}
      <div className="flex items-start gap-4">
        {/* Optional: Remove avatar if you want plain text like the image */}
        {logoUrl && (
          <Avatar className="border size-10 bg-muted-background dark:bg-foreground">
            <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        )}
        
        <div className="flex-1 space-y-1"> {/* Tight vertical spacing */}
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="font-bold text-base">{title}</h3>
              {subtitle && <p className="text-sm">{subtitle}</p>}
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
              {period}
            </span>
          </div>
          
          {description && (
            <p className="text-sm mt-1"> {/* Small top margin for description */}
              {description}
            </p>
          )}
          
          {badges && (
            <div className="mt-2 flex gap-1 flex-wrap">
              {badges.map((badge, index) => (
                <Badge variant="secondary" className="text-xs" key={index}>
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};