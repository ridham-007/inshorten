
export default function Disclaimer() {
    return (
        <div className="flex flex-col h-full p-[20px] rounded-xl border bg-card text-card-foreground shadow">
            <h1 className="flex justify-center text-[24px] font-bold p-[20px]">Disclaimer</h1>
            <p>The information contained on the Service is for general information purposes only.</p>
            <p>The Company assumes no responsibility for errors or omissions in the contents of the Service.</p><br />
            <p>In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.</p><br />
            <p>The Company does not warrant that the Service is free of viruses or other harmful components.</p><br />
            <h2 className="text-[19px] font-semibold">External Links Disclaimer</h2>
            <p>The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.</p>
            <p>Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p><br />
            <h2 className="text-[19px] font-semibold">Errors and Omissions Disclaimer</h2>
            <p>The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.</p><br />
            <p>The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p><br />
            <h2 className="text-[19px] font-semibold">Fair Use Disclaimer</h2>
            <p>The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.</p>
            <p>The Company believes this constitutes a &quot;fair use&quot; of any such copyrighted material as provided for in section 107 of the United States Copyright law.</p><br />
            <p>If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.</p><br />
            <h2 className="text-[19px] font-semibold">Views Expressed Disclaimer</h2>
            <p>The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.</p><br />
            <p>Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.</p><br />
            <h2 className="text-[19px] font-semibold">No Responsibility Disclaimer</h2>
            <p>The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.</p><br />
            <p>In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.</p><br />
            <h2 className="text-[19px] font-semibold">&quot;Use at Your Own Risk&quot; Disclaimer</h2>
            <p>All information in the Service is provided &quot;as is&quot;, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</p><br />
            <p>The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p><br />
            <h2 className="text-[19px] font-semibold">Contact Us</h2>
            <p>If you have any questions about this Disclaimer, You can contact Us:</p>
            <ul>
                <span className="flex gap-[10px]">By email:
                    <a key="email-link" className="text-own_blue_color_primary font-medium" href="mailto:contact@inshorten.com">
                        contact@inshorten.com
                    </a>
                </span>
            </ul>
        </div>
    )
}