import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomNavbar from './Custom_nav';
import Image from 'react-bootstrap/Image';
import { BsTrash } from 'react-icons/bs';


const diagnosis = ['Albumin 25%',
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




function Home() {

    const [doses, setDoses] = useState([{ doseName: '', doseQuantity: '' }]);

    const handleAddDose = () => {
        setDoses([...doses, { doseName: '', doseQuantity: '' }]);
    };

    const handleDoseChange = (index, field, value) => {
        const newDoses = [...doses];
        newDoses[index][field] = value;
        setDoses(newDoses);
    };

    const handleRemoveDose = (index) => {
        const newDoses = doses.filter((_, i) => i !== index);
        setDoses(newDoses);
    };


    return(
        <>
        <CustomNavbar/>
        <div>
            <Row>
                <Col className='p-3 m-3'>
                    <h2>
                    "Predict, Prevent, and Protect – Revolutionizing Patient Discharge. Bridging Data and Care for Better Health Outcomes."
                    </h2>
                </Col>
                <Col className='p-3 m-3'>
                </Col>
            </Row>
        </div>
        <div>
        <Container className='m-5'>
                <Row className="justify-content-md-center">
                    <Col md={6} style={{ textAlign: 'left' }}>
                        <Form style={{"backgroundColor":"#A9E190"}}>
                            <Form.Group className="mb-3 mx-3" controlId="formMedication">
                                <Form.Label>Diagnosis</Form.Label>
                                <Form.Select aria-label="Select Diagnosis">
                                    {diagnosis.map((Diagnosis, index) => (
                                        <option key={index} value={Diagnosis}>{Diagnosis}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            {doses.map((dose, index) => (
                                <Row className="g-2 mb-3 mx-3" key={index}>
                                    <Col md>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter Dose" 
                                            value={dose.doseName}
                                            onChange={(e) => handleDoseChange(index, 'doseName', e.target.value)}
                                        />
                                    </Col>
                                    <Col md>
                                        <Form.Control 
                                            type="number" 
                                            placeholder="Enter Dose amount" 
                                            value={dose.doseQuantity}
                                            onChange={(e) => handleDoseChange(index, 'doseQuantity', e.target.value)}
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button variant="danger" onClick={() => handleRemoveDose(index)}>
                                            <BsTrash />
                                        </Button>
                                    </Col>
                                </Row>
                            ))}
                            <Button variant="secondary" onClick={handleAddDose} className="mb-3 mx-3">
                                Add Dose
                            </Button>
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