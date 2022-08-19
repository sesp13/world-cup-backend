import express from 'express';
import cors from 'cors';

// Database
import { connectDB } from '../db/conn';

// Routes
import groupRoutes from '../routes/group';
import metaStickerRoutes from '../routes/metaSticker';
import stickerRoutes from '../routes/sticker';
import userRoutes from '../routes/user';

class Server {
  private app: express.Application;
  private port: String;
  private apiPaths = {
    groups: '/api/groups',
    metaStickers: '/api/meta-stickers',
    stickers: '/api/stickers',
    users: '/api/users',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';

    //Database
    this.connectDatabase();

    //Middlewares
    this.middlewares();

    //Def routes
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura del body
    this.app.use(express.json());

    //Carpeta publica
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.groups, groupRoutes);
    this.app.use(this.apiPaths.metaStickers, metaStickerRoutes);
    this.app.use(this.apiPaths.stickers, stickerRoutes);
    this.app.use(this.apiPaths.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Sever running on port ' + this.port);
    });
  }

  async connectDatabase(): Promise<void> {
    await connectDB();
  }
}

//Por defecto exporto esta clase
export default Server;
