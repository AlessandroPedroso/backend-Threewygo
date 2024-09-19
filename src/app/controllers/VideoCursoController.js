import { VideoCursoService } from '../service/videoCurso.service';

const service = new VideoCursoService();
class VideoCursoController {
  async store(request, response) {
    const result = await service.create(request, response);

    return response.status(200).json(result);
  }
}

export default new VideoCursoController();
