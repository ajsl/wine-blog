export interface IPost {
    id: number;
    date: Date;
    name: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    categories: number[];
    tags: number[];
    _embedded: {
        
    };

}

export interface IFeaturedMedia {
    id: number;
    alt_text: string;
    media_details: {
        sizes: {
            thumbnail: {
                source_url: string;
            }
        }
    }
}
