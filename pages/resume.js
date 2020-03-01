import Page from "../components/Page/Page";
import Resume from "../components/Resume/Resume";

const ResumePage = () => (
  <Page>
    <h1 className="no-print">Résumé</h1>
    <p className="no-print">
      This is the online version of my résumé. Click <a href="#">here</a> to
      download a PDF variant.
    </p>
    <Resume />
  </Page>
);

export default ResumePage;
