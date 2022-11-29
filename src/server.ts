import router from './routes/car.route';
import App from './app';

const server = new App();

server.addRouter(router);

export default server;
