export interface NavLink {
    name: string;
    url: string;
  }

  export interface NavigationContent {
    links: NavLink[];
  }
  
  export interface HomeData {
    pageTitle: string;
    name: string;
    intro: string;
    tagline: string;
    links: {
      name: string;
      url: string;
    }[];
  }