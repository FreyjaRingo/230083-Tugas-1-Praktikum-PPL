const request = require('supertest');
const app = require('./index');

describe('GET /api/inventory', () => {
    it('harus mengembalikan daftar inventori', async () => {
        const res = await request(app).get('/api/inventory');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toBe("OK");
    });
});