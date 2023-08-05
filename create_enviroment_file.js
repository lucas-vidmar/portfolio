const fs = require('fs');
const path = require('path');

const dir = "src/environments";
const filename = "environment.ts";
const prodfilename = "environment.prod.ts";

const envConfigFile = `${process.env.FIREBASE_DETAILS}`;

fs.access(dir, fs.constants.F_OK, (err) => {
    if (err) {
        // Directory doesnt exist
        console.log("Directory doesn't exist, creating", process.cwd());
        // Create the directory
        fs.mkdirSync(dir, { recursive: true }, (err) => {
            if (err) throw err;
        });
    }
    // Directory exists, write file
    try {
        fs.writeFileSync(path.join(dir, filename), envConfigFile);
        fs.writeFileSync(path.join(dir, prodfilename), envConfigFile);
        console.log("Environment file created successfully in ", process.cwd());
        if(fs.existsSync(dir + "/"+ filename)) {
            console.log("Environment was created in ", path.resolve(dir + "/"+ filename));
            const str = fs.readFileSync(dir + "/"+ filename, 'utf8').toString();
            console.log(str);
        }
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
});
