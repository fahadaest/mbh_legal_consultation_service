import type { Schema, Struct } from '@strapi/strapi';

export interface TeamLinksTeamLinks extends Struct.ComponentSchema {
  collectionName: 'components_team_links_team_links';
  info: {
    displayName: 'TeamLinks';
    icon: 'link';
  };
  attributes: {
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'team-links.team-links': TeamLinksTeamLinks;
    }
  }
}
