import type { Struct, Schema } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sub.sub-navigation': SubSubNavigation;
    }
  }
}
