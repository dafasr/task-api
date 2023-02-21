const winston = require('winston');

// Buat logger baru dengan konfigurasi yang sesuai
const logger = winston.createLogger({
  level: 'info', // level logging yang ditentukan
  format: winston.format.json(),
  defaultMeta: { service: 'task-api' },
  transports: [
    // Transport untuk menulis log ke file
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// Jika aplikasi tidak dalam mode production, tambahkan transport untuk menampilkan log di konsol
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

module.exports = logger;
