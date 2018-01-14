export const ping = async ctx => {
  ctx.response.status = 200
  ctx.response.body = 'pong'
}
