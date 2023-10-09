
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var dd = {
	content: [
		{
      text: 'Wcogeo Administradora e Servicos LTDA | Wco Geo',
      style: 'NomeEmpresa'
    },

    'Pagina de pdf gerada com PDFMAKE',
    'Criador dessa Pagina: Lucas Amaral\n\n',

    {
      text: 'Mensagem',
      style: 'Estilo2'
    },
    'Koe stolpe paga um açai ai pra mim!!!'

	],
  styles:{
    NomeEmpresa: {
      fontSize: 20,
      bold: true,
      textAlign: 'center'
    },
    Estilo2: {
      fontSize: 15,
			bold: true
    }
  }
	
}

function App() {
  return (
    <div className="App">
        <h1>aoooo</h1>
        <button onClick={() => {
          pdfMake.createPdf(dd).download();
        }}>Baixar Teste</button>
    </div>
  );
}

export default App;
