## Inspiration
Even with meticulous treatment and prescribed medications, unfortunate instances of patient mortality persist, underscoring the critical need for innovative solutions. By leveraging advanced predictive analytics, we can identify potential risks, enabling medical professionals to proactively adjust treatment plans and medications. This proactive approach could significantly reduce the chances of adverse outcomes, emphasizing our commitment to enhancing patient safety and well-being. 

1. **Better and faster diagnosis**: Understanding the factors that contribute to successful discharges, healthcare providers can tailor their approaches according to specific cases, leading to better recovery for patients. 
Improving Patient Outcomes: The possibility of undetected cases and wrong diagnosis exponentially decreases ensuring improved patient care and treatment outcomes.
2. **Data-Driven Decision Making**: Analyzing historical discharge data and patient outcomes allows for evidence-based decision making, enabling healthcare providers to identify patterns and trends that might not be apparent through traditional methods.
3. **Research and Innovation**: Developing a predictive tool for successful discharge involves innovative use of technology and data analysis techniques, contributing to advancements in the field.
Enhancing Quality of Care: By identifying barriers to successful discharge, healthcare providers can enhance the overall quality of care provided to patients, leading to better patient satisfaction and trust in the healthcare system.

## What it does
Medical professionals/patients can input diagnostic information, including the diagnosis itself and details about the number of prescribed medications along with their respective dosages, into the RecoverRight portal. Our sophisticated predictive model meticulously analyzes this data to assess the potential risks associated with the prescribed medications. If the model detects any combination of dosage or medication that could be potentially fatal, it provides a crucial alert to the user. In cases where no fatal interactions are identified, the user can confidently proceed with the proposed treatment plan. However, if the model highlights any dosage or medication as potentially fatal, the user is suggested to modify their treatment approach accordingly. This system ensures an additional layer of safety and precision, empowering healthcare providers to make well-informed decisions that prioritize patient well-being and safety.


## How we built it
Imported tables from MIMIC-III database and created a dataset which was a combination of one hot encoding matrix of each visit of a patient mapped across the medicines. Then, we created another matrix including the dosage of medicines present in the previous matrix across subjects. Further, we combined these matrices with numerical and categorical features like patient weight and diagnosis respectively. Due to undersampling of fatal cases, we use simple imputer algorithm to sample the minority class. We used Random Forest classifier to determine whether a patient would have a successful discharge or not. We converted this model into a pickle file and integrated it with our frontend using a Flask API. 


## Challenges we ran into

1. Due to privacy concerns regarding patients’ health records, searching a reliable and consistent electronic health record for this purpose was not feasible.
2. After meticulous research we found a dataset which mimicked the original patient healthcare data, we used the mimic clinical dataset which had records of 130 visits of various patients.
3. Merging the different csv files according to the patient id, visit information, medication and its amount - Patients can be administered with various drugs for a same diagnosis across multiple visits hence creating a single dataset consisting of such a complex structure required us to consider two diagnoses of the same patient as separate cases.
4. Since we had more than 10 tables in the mimic dataset, finding out relevant features for our model was one of the most difficult task as we had 100s of potential features for our model, we used PCA for selecting relevant features for our model.

## Accomplishments that we are proud of
Merging the vast and complex data from different csv files.

## What we learned
We learnt that it is important to focus on the accuracy and data points more as it is not as simple as working with any other domain. A slight difference in the data points could result in a patient’s life and death.

## Try it out
https://recoverright.netlify.app/

## Demo
https://youtu.be/buICNkSjSy8

## What's next for RecoverRight
Addition of features such as:
1. level of healthcare professional involvement
2. post-discharge support systems in the analysis.
3. Predicting how altering specific elements of the discharge process may lead to improved patient recovery trajectories.
