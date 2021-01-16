export interface IPage {
    id: number;
    date: Date;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    _embedded: {
        
    };

}