import { VideoCursoService } from '../service/videoCurso.service';

const service = new VideoCursoService();
class VideoCursoController {
  async store(request, response) {
    const result = await service.create(request, response);

    return response.status(200).json(result);
  }

  async index(request, response) {
    await service.list(request, response);
  }

  async show(request, response) {
    await service.show(request, response);
  }
}

export default new VideoCursoController();
