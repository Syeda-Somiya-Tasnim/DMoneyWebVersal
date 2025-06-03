import newman from 'newman';
import open from 'open';

newman.run({
    collection: 'https://api.postman.com/collections/33669534-e4519e05-6b51-49f2-a350-f541a8c71503?access_key=PMAT-01JWQH1HAPMMX4J0KG39KS6H5C',
    reporters: 'htmlextra',
    insecure: true,
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
            title: 'Dmoney API Test Report',
            browserTitle: 'Dmoney API Results',
        }
    }
}, (err, summary) => {
    if (err) throw err;

    if (summary.run.failures.length > 0) {
        console.error(`❌ ${summary.run.failures.length} test(s) failed`);
    } else {
        console.log('✅ All tests passed successfully!');
    }

    console.log('collection run complete!');
    open('./Reports/report.html');
});