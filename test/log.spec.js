const log = require("../helpers/logg/log");
describe('Logger Tests', () => {
 
    beforeEach(() => {
        log.writeFile();
    });

    afterEach(() => {
        log.removeFile();
    });

    test('log_message function writes a log entry to the file', () => {
        log.log_message('User logged in', log.level.info);

        const logContent = log.readFile()
        expect(logContent).toContain(`[INFO] - User logged in`);
    });

    test('log_message function writes multiple log entries to the file', () => {
        log.log_message('User logged in', log.level.info);
        log.log_message('Failed login attempt', log.level.warning);

        const logContent = log.readFile();
        expect(logContent).toContain(`[INFO] - User logged in`);
        expect(logContent).toContain(`[WARNING] - Failed login attempt`);
    });
});