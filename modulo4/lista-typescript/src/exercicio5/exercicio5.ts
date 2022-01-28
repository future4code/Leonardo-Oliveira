type Usuario = {
  name: string;
  email: string;
  role: string;
}

export const usuarios: Usuario[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"},      
];

export const ExibeUsuarioRole = (arrUsuarios: Usuario[], role : string): Usuario[] => {
  const usuariosRole:Usuario[] = arrUsuarios.filter((usuario : Usuario) => {
    return usuario.role === role;
  })

  return usuariosRole;
}