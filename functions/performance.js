export default (req, res) => {
    let run = 6;
    const prim = [2, 3, 5];
    const start = Date.now();
    while (run <= 10000) {
        let newPrim = true;
        prim.forEach((primNumber) => {
            if (run % primNumber == 0) {
                newPrim = false;
            }
        });
        if (newPrim) {
            prim.push(run);
        }
        run = run + 1;
    }
    const finish = Date.now();
    const time = finish - start;
    console.log(time);
    res.status(200);
};