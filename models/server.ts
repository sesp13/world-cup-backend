import express from 'express';
import cors from 'cors';

// Database
import { connectDB } from '../db/conn';

// Routes
import adminRoutes from '../routes/adminRoutes';
import authRoutes from '../routes/authRoutes';
import groupRoutes from '../routes/groupRoutes';
import metaStickerRoutes from '../routes/metaStickerRoutes';
import stickerRoutes from '../routes/stickerRoutes';
import userRoutes from '../routes/userRoutes';

class Server {
  private app: express.Application;
  private port: String;
  private apiPaths = {
    admin: '/api/admin',
    auth: '/api/auth',
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
    this.app.use(this.apiPaths.admin, adminRoutes);
    this.app.use(this.apiPaths.auth, authRoutes);
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
