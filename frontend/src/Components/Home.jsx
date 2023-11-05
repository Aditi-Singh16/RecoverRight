import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import right from './images/right.png'
import { BsTrash } from 'react-icons/bs';


const Medicines = ['Albumin 25%',
'Albumin 5%',
'Dextrose 5%',
'Dextrose 10%',
'Dextrose 50%',
'Fresh Frozen Plasma',
'Sodium Bicarbonate 8.4%',
'Nutren Renal (Full)',
'Amiodarone',
'Lorazepam (Ativan)',
'Atropine',
'Esmolol',
'Calcium Gluconate',
'Diltiazem',
'Cisatracurium',
'Dobutamine',
'Dopamine',
'Midazolam (Versed)',
'Fentanyl',
'Phenylephrine',
'Furosemide (Lasix)',
'Haloperidol (Haldol)',
'Hydralazine',
'Hydromorphone (Dilaudid)',
'Norepinephrine',
'Milrinone',
'Magnesium Sulfate',
'Nicardipine',
'Nitroglycerin',
'Vecuronium',
'Propofol',
'Vasopressin',
'Insulin - 70/30',
'Insulin - Regular',
'Insulin - NPH',
'Insulin - Glargine',
'Insulin - Humalog',
'Heparin Sodium',
'Labetalol',
'Morphine Sulfate',
'Octreotide',
'Pentobarbital',
'NaCl 0.9%',
'NaCl 0.45%',
'NaCl 3% (Hypertonic Saline)',
'Potassium Chloride',
'Packed Red Blood Cells',
'Platelets',
'Cryoprecipitate',
'Hetastarch (Hespan) 6%',
'Free Water',
'Vancomycin',
'Gastric Meds',
'D5 1/2NS',
'D5NS',
'LR',
'Multivitamins',
'Folic Acid',
'Thiamine',
'K Phos',
'Na Phos',
'Acyclovir',
'Ampicillin',
'Ampicillin/Sulbactam (Unasyn)',
'Azithromycin',
'Cefazolin',
'Cefepime',
'Ceftazidime',
'Ceftriaxone',
'Ciprofloxacin',
'Clindamycin',
'Daptomycin',
'Doxycycline',
'Fluconazole',
'Levofloxacin',
'Linezolid',
'Meropenem',
'Metronidazole',
'Nafcillin',
'Piperacillin',
'Piperacillin/Tazobactam (Zosyn)',
'Bactrim (SMX/TMP)',
'Tobramycin',
'Enoxaparin (Lovenox)',
'Famotidine (Pepcid)',
'Lansoprazole (Prevacid)',
'Pantoprazole (Protonix)',
'Ranitidine (Prophylaxis)',
'Carafate (Sucralfate)',
'Coumadin (Warfarin)',
'TPN w/ Lipids',
'Beneprotein',
'Meperidine (Demerol)',
'Metoprolol',
'Heparin Sodium (Prophylaxis)',
'Replete with Fiber (3/4)',
'Piggyback',
'TPN without Lipids',
'Impact with Fiber (Full)',
'Nutren 2.0 (Full)',
'Vivonex (Full)',
'Replete with Fiber (Full)',
'Ensure (Full)',
'D5 1/4NS',
'Fentanyl (Concentrate)',
'Solution',
'Sterile Water',
'Pre-Admission Intake',
'Cath Lab Intake',
'OR Crystalloid Intake',
'OR Colloid Intake',
'OR FFP Intake',
'OR Packed RBC Intake',
'OR Cell Saver Intake',
'PACU Crystalloid Intake',
'PO Intake',
'GT Flush',
'Nutren Pulmonary (Full)',
'Citrate',
'ACD-A Citrate (1000ml)',
'Mannitol',
'Sodium Bicarbonate 8.4% (Amp)',
'Vitamin K (Phytonadione)',
'KCl (CRRT)',
'KCL (Bolus)',
'Magnesium Sulfate (Bolus)',
'Calcium Gluconate (CRRT)',
'Fosphenytoin',
'Keflex',
'Omeprazole (Prilosec)',
'Fibersource HN (Full)',
'NovaSource Renal (Full)',
'Boost Glucose Control (Full)',
'Acetaminophen-IV',
'Glucerna (Full)'];

const medicine_id = [220862,
    220864,
    220949,
    220950,
    220952,
    220970,
    220995,
    221036,
    221347,
    221385,
    221393,
    221429,
    221456,
    221468,
    221555,
    221653,
    221662,
    221668,
    221744,
    221749,
    221794,
    221824,
    221828,
    221833,
    221906,
    221986,
    222011,
    222042,
    222056,
    222062,
    222168,
    222315,
    223257,
    223258,
    223259,
    223260,
    223262,
    225152,
    225153,
    225154,
    225155,
    225156,
    225158,
    225159,
    225161,
    225166,
    225168,
    225170,
    225171,
    225174,
    225797,
    225798,
    225799,
    225823,
    225825,
    225828,
    225830,
    225832,
    225833,
    225834,
    225835,
    225837,
    225842,
    225843,
    225845,
    225850,
    225851,
    225853,
    225855,
    225859,
    225860,
    225863,
    225865,
    225869,
    225879,
    225881,
    225883,
    225884,
    225888,
    225892,
    225893,
    225899,
    225902,
    225906,
    225907,
    225909,
    225910,
    225911,
    225912,
    225913,
    225916,
    225970,
    225973,
    225974,
    225975,
    226050,
    226089,
    225917,
    225928,
    225931,
    225934,
    225936,
    225937,
    225941,
    225942,
    225943,
    225944,
    226361,
    226363,
    226364,
    226365,
    226367,
    226368,
    226372,
    226375,
    226452,
    226453,
    226880,
    227526,
    227529,
    227531,
    227533,
    227535,
    227536,
    227522,
    227523,
    227525,
    227690,
    227691,
    227694,
    227695,
    227975,
    227979,
    228315,
    228359];

const diagnosisOptions = ['SHORTNESS OF BREATH', 'PNEUMONIA', 'ACUTE CHOLANGITIS',
'FEVER;URINARY TRACT INFECTION',
'SYNCOPE;TELEMETRY;INTRACRANIAL HEMORRHAGE', 'LEFT HIP OA/SDA',
'MEDIASTINAL ADENOPATHY', 'FACIAL NUMBNESS',
'AROMEGLEY;BURKITTS LYMPHOMA', 'STEMI;',
'TRACHEAL ESOPHAGEAL FISTULA', 'SEPSIS', 'CHOLECYSTITIS',
'CELLULITIS', 'ABDOMINAL PAIN', 'ASTHMA;CHRONIC OBST PULM DISEASE',
'ELEVATED LIVER FUNCTIONS;S/P LIVER TRANSPLANT',
'HYPOTENSION;UNRESPONSIVE', 'FEVER',
'URINARY TRACT INFECTION;PYELONEPHRITIS', 'S/P FALL',
'TRACHEAL STENOSIS', 'INFERIOR MYOCARDIAL INFARCTION\\CATH',
'FAILURE TO THRIVE', 'HEPATIC ENCEP', 'CHEST PAIN',
'RENAL CANCER/SDA', 'UPPER GI BLEED',
'PNEUMONIA/HYPOGLCEMIA/SYNCOPE', 'ASTHMA/COPD FLARE', 'VOLVULUS',
'SEIZURE;STATUS EPILEPTICUS', 'HYPOGLYCEMIA',
'CEREBROVASCULAR ACCIDENT', 'HYPOTENSION',
'METASTIC MELANOMA;ANEMIA', 'HYPOTENSION, RENAL FAILURE',
'ACUTE SUBDURAL HEMATOMA', 'ESOPHAGEAL CA/SDA', 'MI CHF',
'STROKE/TIA', 'PLEURAL EFFUSION', 'ACUTE PULMONARY EMBOLISM',
'PNEUMONIA;TELEMETRY',
'CORONARY ARTERY DISEASE\\CORONARY ARTERY BYPASS GRAFT /SDA',
'PERICARDIAL EFFUSION', 'ALTERED MENTAL STATUS',
'ACUTE RESPIRATORY DISTRESS SYNDROME;ACUTE RENAL FAILURE',
'BRADYCARDIA', 'CHOLANGITIS']

const dataToModelKeys = [
    "225152_x", "220949_x", "222168_x", "225943_x", "226361_x", "225158_x", 
    "226453_x", "225909_x", "225799_x", "225879_x", "221824_x", "226452_x", "225823_x", "226089_x", 
    "222011_x", "225166_x", "225834_x", "221744_x", "221668_x", "225975_x", "225798_x", "225855_x", 
    "225845_x", "225860_x", "225910_x", "225944_x", "225893_x", "227523_x", "225168_x", "225884_x", 
    "225154_x", "225828_x", "223258_x", "220952_x", "221456_x", "221749_x", "225942_x", "225859_x", 
    "220970_x", "225974_x", "225161_x", "226375_x", "225850_x", "225906_x", "225907_x", "221662_x", 
    "223262_x", "221794_x", "222056_x", "221906_x", "225797_x", "225936_x", "225853_x", "225883_x", 
    "225899_x", "220995_x", "225869_x", "225865_x", "225837_x", "225851_x", "227975_x", "225970_x", 
    "225170_x", "227522_x", "225931_x", "221347_x", "221385_x", "221468_x", "221429_x", "226364_x", 
    "226050_x", "225916_x", "221828_x", "225153_x", "225159_x", "226363_x", "220862_x", "223257_x", 
    "225913_x", "225892_x", "225825_x", "223259_x", "223260_x", "225902_x", "227695_x", "226365_x", 
    "222315_x", "225174_x", "227533_x", "225843_x", "226367_x", "226368_x", "225171_x", "221833_x", 
    "225835_x", "225911_x", "226880_x", "220950_x", "227979_x", "225881_x", "228359_x", "225863_x", 
    "228315_x", "227694_x", "221653_x", "225833_x", "225830_x", "225832_x", "221393_x", "225912_x", 
    "225155_x", "225842_x", "227690_x", "225917_x", "225928_x", "225156_x", "222062_x", "222042_x", 
    "227531_x", "220864_x", "221986_x", "227691_x", "225937_x", "226372_x", "227536_x", "227525_x", 
    "221555_x", "227529_x", "227526_x", "221036_x", "225934_x", "225888_x", "227535_x", "225941_x", 
    "225973_x", "225152_y", "220949_y", "222168_y", "225943_y", "226361_y", "225158_y", "226453_y", 
    "225909_y", "225799_y", "225879_y", "221824_y", "226452_y", "225823_y", "226089_y", "222011_y", 
    "225166_y", "225834_y", "221744_y", "221668_y", "225975_y", "225798_y", "225855_y", "225845_y", 
    "225860_y", "225910_y", "225944_y", "225893_y", "227523_y", "225168_y", "225884_y", "225154_y", 
    "225828_y", "223258_y", "220952_y", "221456_y", "221749_y", "225942_y", "225859_y", "220970_y", 
    "225974_y", "225161_y", "226375_y", "225850_y", "225906_y", "225907_y", "221662_y", "223262_y", 
    "221794_y", "222056_y", "221906_y", "225797_y", "225936_y", "225853_y", "225883_y", "225899_y", 
    "220995_y", "225869_y", "225865_y", "225837_y", "225851_y", "227975_y", "225970_y", "225170_y", 
    "227522_y", "225931_y", "221347_y", "221385_y", "221468_y", "221429_y", "226364_y", "226050_y", 
    "225916_y", "221828_y", "225153_y", "225159_y", "226363_y", "220862_y", "223257_y", "225913_y", 
    "225892_y", "225825_y", "223259_y", "223260_y", "225902_y", "227695_y", "226365_y", "222315_y", 
    "225174_y", "227533_y", "225843_y", "226367_y", "226368_y", "225171_y", "221833_y", "225835_y", 
    "225911_y", "226880_y", "220950_y", "227979_y", "225881_y", "228359_y", "225863_y", "228315_y", 
    "227694_y", "221653_y", "225833_y", "225830_y", "225832_y", "221393_y", "225912_y", "225155_y", 
    "225842_y", "227690_y", "225917_y", "225928_y", "225156_y", "222062_y", "222042_y", "227531_y", 
    "220864_y", "221986_y", "227691_y", "225937_y", "226372_y", "227536_y", "227525_y", "221555_y", 
    "227529_y", "227526_y", "221036_y", "225934_y", "225888_y", "227535_y", "225941_y", "225973_y", 
    "diagnosis", "patientweight"
];

const jsonData = {};

dataToModelKeys.forEach(key => {
    jsonData[key] = 0;
});

console.log(jsonData);

function Home() {

    const [doses, setDoses] = useState([]);
    const [numDoses, setNumDoses] = useState(0);
    const [diagnosis, setDiagnosis] = useState('');
    const [weight,setWeight] = useState(0);

    const handleAddDoses = () => {
        const newDoses = Array.from({ length: numDoses }, () => ({ medicine: '', id: null, quantity: 0 }));
        setDoses(newDoses);
    };

    const handleDoseChange = (index, field, value) => {
        const newDoses = [...doses];
        if (field === 'medicine') {
            newDoses[index] = { ...newDoses[index], medicine: value, id: medicine_id[Medicines.indexOf(value)] };
        } else {
            newDoses[index][field] = value;
        }
        setDoses(newDoses);
    };

    const handleRemoveDose = (index) => {
        const newDoses = doses.filter((_, i) => i !== index);
        setDoses(newDoses);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        doses.forEach(dose => {
            if (dose.medicine) {
                const medicineKeyX = dose.id + '_x';
                const medicineKeyY = dose.id + '_y';
                if (medicineKeyX in jsonData) {
                    jsonData[medicineKeyX] = 1;
                }
    
                if (medicineKeyY in jsonData) {
                    jsonData[medicineKeyY] = parseInt(dose.quantity, 10);
                }
            }
        });
    
        // Set diagnosis in jsonData
        if (diagnosis) {
            jsonData['diagnosis'] = diagnosis;
        }
        jsonData['visit'] = 1;
        jsonData['patientweight'] = weight
    
        console.log(JSON.stringify(jsonData));
        fetch(`https://aditiasi.pythonanywhere.com/predict`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.token) {
                } else if (result.error) {
                }
            })
    };


    return(
        <>
        <div className='Home-main'>
            <Row>
                <Col className='Home-left'>
                    <h1>
                    "<span className='Home-left-b'>Predict</span>, <span className='Home-left-b'>Prevent</span>, and <span className='Home-left-b'>Protect</span> – Revolutionizing Patient Discharge. Bridging Data and Care for Better Health Outcomes."
                    </h1>
                </Col>
                <Col className='Home-right'>
                    <img className='Home-right-img' src={right} alt="illustration" />
                </Col>
            </Row>
        </div>
        <div>
        <Container className='m-5'>
                <Row className="justify-content-md-center">
                    <Col md={6} style={{ textAlign: 'left' }}>
                        <Form onSubmit={handleSubmit} style={{ "backgroundColor": "#A9E190" }}>
                        <Form.Group className="mb-3 mx-3" controlId="patient_wt">
                            <Form.Label>Patient Weight</Form.Label>
                            <Form.Control type="Number"
                            value={weight}
                            onChange={(e) => setWeight(parseInt(e.target.value, 10) || 0)}
                            placeholder="Enter Weight" />
                        </Form.Group>
                            <Form.Group className="mb-3 mx-3">
                                <Form.Label>Diagnosis</Form.Label>
                                <Form.Select 
                                    aria-label="Select Diagnosis"
                                    onChange={(e) => setDiagnosis(e.target.value)}
                                >
                                    <option value="">Select Diagnosis</option>
                                    {diagnosisOptions.map((diag, i) => (
                                        <option key={i} value={diag}>{diag}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 mx-3">
                                <Form.Label>Number of Doses</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    placeholder="Enter number of doses" 
                                    value={numDoses}
                                    onChange={(e) => setNumDoses(parseInt(e.target.value, 10) || 0)}
                                />
                            </Form.Group>
                            <Button variant="secondary" onClick={handleAddDoses} className="mb-3 mx-3">
                                Add Doses
                            </Button>

                            {doses.map((dose, index) => (
                                <Row className="g-2 mb-3 mx-3" key={index}>
                                <Col md>
                                    <Form.Select 
                                        value={dose.medicine}
                                        onChange={(e) => handleDoseChange(index, 'medicine', e.target.value)}
                                    >
                                        <option value="">Select Medicine</option>
                                        {Medicines.map((medicine, i) => (
                                            <option key={i} value={medicine}>{medicine}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col md>
                                    <Form.Control 
                                        type="number" 
                                        placeholder="Enter Dose amount" 
                                        value={dose.quantity}
                                        onChange={(e) => handleDoseChange(index, 'quantity', e.target.value)}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button variant="danger" onClick={() => handleRemoveDose(index)}>
                                        <BsTrash />
                                    </Button>
                                </Col>
                            </Row>
                            ))}

                            <Button variant="primary" type="submit" className="mb-3 mx-3">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Home;