import moment from "moment"
import { CSVLink } from 'react-csv';

export const dateFormatter = (date: string) => {
  if (date)
    return moment(new Date(date)).format('DD-MM-yyyy')
  else
    return ''
}

export const ExportCSVButton: React.FC<{ csvData: any; fileName: string, headers: any }> = ({ csvData, fileName, headers }) => (
  <CSVLink data={csvData} filename={fileName} headers={headers}>
    Export CSV
  </CSVLink>
);

export const containsNonHtmlText = (inputString: string) => {
  const textWithoutHtml = inputString.replace(/<[^>]+>/g, ''); 
  return textWithoutHtml.trim() !== '';
}

export const convertBase64 = (file: any) =>
new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file)
  fileReader.onload = () => {
    resolve(fileReader.result);
  }
  fileReader.onerror = (error) => {
    reject(error);
  }
})