import path from "path";
import { readFile } from "fs/promises";
import * as XLSX from "xlsx";

export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
}

export async function readServicesFromXLSX(filePath: string): Promise<Service[]> {
  try {
    const absolutePath = path.join(process.cwd(), "public", filePath);
    const buffer = await readFile(absolutePath);
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const jsonData = XLSX.utils.sheet_to_json<any>(worksheet);

    return jsonData
      .filter((item) => Boolean(item.Цена))
      .map((row, index) => ({
        id: index + 1,
        name: row.Наименование,
        description: row.ЕИ || "",
        price: row.Цена || "",
      }));
  } catch (error) {
    console.error("Error reading XLSX file:", error);
    return [];
  }
}
