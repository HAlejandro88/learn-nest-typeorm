export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback: Function,
) => {
  if (!file) callback(new Error('File is empty'), false);
  const fileExtencion = file.mimetype.split('/')[1];
  const validExtencion = ['jpg', 'jpeg', 'png', 'gif'];
  if (validExtencion.includes(fileExtencion)) return callback(null, true);
  return callback(null, true);
};
