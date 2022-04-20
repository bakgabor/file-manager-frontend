import Authentication from '~/api/Authentication'
import FileRepository from '~/api/FileRepository'

export default (ctx, inject) => {
  const authentication = Authentication(ctx.$axios)
  const fileRepository = FileRepository(ctx.$axios)

  inject('authentication', authentication)
  inject('fileRepository', fileRepository)
}
