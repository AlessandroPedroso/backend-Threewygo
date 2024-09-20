import { VideoCursoService } from '../service/videoCurso.service';

const service = new VideoCursoService();
class VideoCursoController {
  async store(request, response) {
    const result = await service.create(request, response);
  }
}

export default new VideoCursoController();
