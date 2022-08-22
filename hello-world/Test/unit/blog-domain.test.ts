import { stringify } from 'querystring';
import { Blog } from '../../Domains/Blog';
describe('Domain', () => {
    test('create blog', () => {
        const blog = new Blog();
        blog.createBlog('https://qiita.com', 'good', 'Frontend')
        expect(blog.url).toEqual('https://qiita.com');
        expect(blog.comment).toEqual('good');
        expect(blog.genre).toEqual('Frontend');
    });
    test('', () => {
        
    })
});
