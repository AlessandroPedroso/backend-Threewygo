import * as Yup from 'yup';
import Curso from '../models/Curso.js';
import VideoCurso from '../models/VideoCurso.js';
export class VideoCursoService {
  async create(request, response) {
    const schema = Yup.object({
      descricao: Yup.string().required('Campo obrigatório'),
      linkVideo: Yup.string().required('Campo obrigatório'),
      cursoId: Yup.number().required('Campo obrigatório'),
    });

    // verifica campos validados pelo Yup
    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ errors: err.errors });
    }

    //pega as inforamções do request file
    const { filename: path_image } = request.file;
    // pega as informações do body
    const { descricao, linkVideo, cursoId } = request.body;
    const _cursoId = Number(cursoId);

    const video = {
      descricao,
      link_video: linkVideo,
      path_image,
      curso_id: _cursoId,
    };

    await VideoCurso.create(video);

    return { message: 'Video criado com Sucesso!' };
  }

  async list(request, response) {
    const videosCurso = await VideoCurso.findAll({
      include: [
        {
          model: Curso,
          as: 'curso',
          attributes: [
            'id',
            'titulo',
            'descricao',
            'data_termino',
            'img_curso',
          ],
        },
      ],
    });

    if (!videosCurso) {
      return response.status(400).json({ message: 'Videos não encontrado.' });
    }

    return response.status(200).json(videosCurso);
  }
}
