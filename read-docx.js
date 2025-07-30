import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';

async function readDocxFile() {
  try {
    const filePath = './К†в†ЂЃ£_2024.docx';
    
    // Проверяем, существует ли файл
    if (!fs.existsSync(filePath)) {
      console.log('Файл не найден:', filePath);
      return;
    }

    console.log('Начинаю чтение файла...');
    
    // Читаем содержимое docx файла
    const result = await mammoth.extractRawText({ path: filePath });
    
    console.log('=== СОДЕРЖИМОЕ ФАЙЛА ===');
    console.log(result.value);
    
    // Сохраняем текст в отдельный файл для удобства
    const outputPath = './extracted-text.txt';
    fs.writeFileSync(outputPath, result.value, 'utf8');
    console.log(`\nТекст сохранен в файл: ${outputPath}`);
    
    // Выводим статистику
    console.log(`\nСтатистика:`);
    console.log(`- Количество символов: ${result.value.length}`);
    console.log(`- Количество строк: ${result.value.split('\n').length}`);
    
  } catch (error) {
    console.error('Ошибка при чтении файла:', error.message);
  }
}

readDocxFile(); 