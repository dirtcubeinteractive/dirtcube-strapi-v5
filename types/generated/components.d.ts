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

export interface SubIntro extends Struct.ComponentSchema {
  collectionName: 'components_sub_intros';
  info: {
    displayName: 'Intro';
  };
  attributes: {
    photo: Schema.Attribute.Media<'images' | 'files'>;
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
  };
}

export interface SubHighlightsList extends Struct.ComponentSchema {
  collectionName: 'components_sub_highlights_lists';
  info: {
    displayName: 'HighlightsList';
  };
  attributes: {
    photo: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface SubHero extends Struct.ComponentSchema {
  collectionName: 'components_sub_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    button_link: Schema.Attribute.String;
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

export interface SubFeaturesList extends Struct.ComponentSchema {
  collectionName: 'components_sub_features_lists';
  info: {
    displayName: 'FeaturesList';
    description: '';
  };
  attributes: {
    photo: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface SubCards extends Struct.ComponentSchema {
  collectionName: 'components_sub_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    title: Schema.Attribute.String;
    label: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    url: Schema.Attribute.Text;
  };
}

export interface SubBottom extends Struct.ComponentSchema {
  collectionName: 'components_sub_bottoms';
  info: {
    displayName: 'Bottom';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    photo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sub.team': SubTeam;
      'sub.sub-navigation': SubSubNavigation;
      'sub.intro': SubIntro;
      'sub.highlights-list': SubHighlightsList;
      'sub.hero': SubHero;
      'sub.hero-section': SubHeroSection;
      'sub.graphic-headings': SubGraphicHeadings;
      'sub.features-list': SubFeaturesList;
      'sub.cards': SubCards;
      'sub.bottom': SubBottom;
    }
  }
}
