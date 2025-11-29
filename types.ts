import React from 'react';

export interface Project {
  title: string;
  description: string;
  status?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
  score?: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}