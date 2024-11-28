import type { Struct, Schema } from '@strapi/strapi';

export interface SubWorkSectionDirtcube extends Struct.ComponentSchema {
  collectionName: 'components_sub_work_section_dirtcubes';
  info: {
    displayName: 'WorkSectionDirtcube';
  };
  attributes: {
    photo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SubTextList extends Struct.ComponentSchema {
  collectionName: 'components_sub_text_lists';
  info: {
    displayName: 'TextList';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

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

export interface SubProtectSectionDirtcube extends Struct.ComponentSchema {
  collectionName: 'components_sub_protect_section_dirtcubes';
  info: {
    displayName: 'ProtectSectionDirtcube';
  };
  attributes: {
    Photo: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.Text;
    TextList: Schema.Attribute.Component<'sub.text-list', true>;
  };
}

export interface SubOfferSection extends Struct.ComponentSchema {
  collectionName: 'components_sub_offer_sections';
  info: {
    displayName: 'OfferSection';
  };
  attributes: {
    Photo: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    OfferBox: Schema.Attribute.Component<'sub.offer-box', false>;
  };
}

export interface SubOfferBox extends Struct.ComponentSchema {
  collectionName: 'components_sub_offer_boxes';
  info: {
    displayName: 'OfferBox';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Date: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    Button: Schema.Attribute.String;
    Timestamp: Schema.Attribute.Integer;
  };
}

export interface SubLocations extends Struct.ComponentSchema {
  collectionName: 'components_sub_locations';
  info: {
    displayName: 'Location';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    place: Schema.Attribute.String;
    description: Schema.Attribute.String;
    counter: Schema.Attribute.String;
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

export interface SubHeroSectionDirtcube extends Struct.ComponentSchema {
  collectionName: 'components_sub_hero_section_dirtcubes';
  info: {
    displayName: 'HeroSectionDirtcube';
  };
  attributes: {
    Title: Schema.Attribute.Text;
    TitleNumber: Schema.Attribute.Integer;
    Description: Schema.Attribute.Text;
    Button: Schema.Attribute.String;
    Photo: Schema.Attribute.Media<'images'>;
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

export interface SubDetailSectionDirtcube extends Struct.ComponentSchema {
  collectionName: 'components_sub_detail_section_dirtcubes';
  info: {
    displayName: 'DetailSectionDirtcube';
    description: '';
  };
  attributes: {
    TextList: Schema.Attribute.Component<'sub.text-list', true>;
    SubTitle: Schema.Attribute.String;
    Content: Schema.Attribute.Text;
    photo: Schema.Attribute.Media<'images'>;
    Location: Schema.Attribute.Component<'sub.locations', true>;
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

export interface SubCardPoint extends Struct.ComponentSchema {
  collectionName: 'components_sub_card_points';
  info: {
    displayName: 'CardPoint';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Details: Schema.Attribute.Blocks;
    Photo: Schema.Attribute.Media<'images'>;
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

export interface SubAcquaintanceSectionDirtcube extends Struct.ComponentSchema {
  collectionName: 'components_sub_acquaintance_section_dirtcubes';
  info: {
    displayName: 'AcquaintanceSectionDirtcube';
  };
  attributes: {
    Title: Schema.Attribute.String;
    TextList: Schema.Attribute.Component<'sub.text-list', true>;
    Location: Schema.Attribute.String;
    Video: Schema.Attribute.Media<'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sub.work-section-dirtcube': SubWorkSectionDirtcube;
      'sub.text-list': SubTextList;
      'sub.team': SubTeam;
      'sub.sub-navigation': SubSubNavigation;
      'sub.protect-section-dirtcube': SubProtectSectionDirtcube;
      'sub.offer-section': SubOfferSection;
      'sub.offer-box': SubOfferBox;
      'sub.locations': SubLocations;
      'sub.intro': SubIntro;
      'sub.highlights-list': SubHighlightsList;
      'sub.hero': SubHero;
      'sub.hero-section': SubHeroSection;
      'sub.hero-section-dirtcube': SubHeroSectionDirtcube;
      'sub.graphic-headings': SubGraphicHeadings;
      'sub.features-list': SubFeaturesList;
      'sub.detail-section-dirtcube': SubDetailSectionDirtcube;
      'sub.cards': SubCards;
      'sub.card-point': SubCardPoint;
      'sub.bottom': SubBottom;
      'sub.acquaintance-section-dirtcube': SubAcquaintanceSectionDirtcube;
    }
  }
}
