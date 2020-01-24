
const options = {
    version: 1,
    alpha: 0.25,
    topk: 3,
    learningRate: 0.00001,
    hiddenUnits: 100,
    epochs: 300,
    numLabels: 2,
    batchSize: 0.4,
};


const featureExtractor = ml5.featureExtractor('MobileNet', options, function (argument) {
    console.log('MODEL READY');
    //on attend que le model soit chargé avant de faire quoi que ce soit sur la page
    document.body.style.display = "block";

});
const classifier = featureExtractor.classification();

function init(model) {
    featureExtractor
}

init();

function classify(imageData) {

    classifier.classify(imageData, (err, result) => {
        console.log(result);
    });
}

function train(argument) {
    classifier.train((lossValue) => {
        document.querySelector("h2 span").innerText = (lossValue) ? lossValue : "Entrainement terminé";
        console.log('Loss is', lossValue);
    });
};

function add(imageElement, label) {
    console.log("Adding a new image to FeatureExtractor", imageElement, (label) ? label : imageElement.dataset.label);
    classifier.addImage(imageElement, (label) ? label : imageElement.dataset.label)
    imageElement.style.opacity = 0.5;
};

function addAndTest() {
    saveDrawing(false, function (drawing) {
        classify(drawing);
    });

}

function save(filename) {
    classifier.save(filename);
};

function load(filename) {
    classifier.load(filename, function () {
        console.log('MODEL LOADED FROM FILE');
    });
};

