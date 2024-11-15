import type { Struct, Schema } from '@strapi/strapi';

export interface SubTeam extends Struct.ComponentSchema {
  collectionName: 'components_sub_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    heading: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean;
  };
}

export interface SubSubNavigation extends Struct.ComponentSchema {
  collectionName: 'components_sub_sub_navigations';
  info: {
    displayName: 'sub-navigation';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    isActive: Schema.Attribute.Boolean;
    position: Schema.Attribute.Integer;
    section: Schema.Attribute.Enumeration<['header', 'footer', 'both']>;
  };
}

export interface SubHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sub_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isActive: Schema.Attribute.Boolean;
  };
}

export interface SubGraphicHeadings extends Struct.ComponentSchema {
  collectionName: 'components_sub_graphic_headings';
  info: {
    displayName: 'Graphic_headings';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    points: Schema.Attribute.Blocks;
    description: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean;
    position: Schema.Attribute.Integer;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sub.team': SubTeam;
      'sub.sub-navigation': SubSubNavigation;
      'sub.hero-section': SubHeroSection;
      'sub.graphic-headings': SubGraphicHeadings;
    }
  }
}
