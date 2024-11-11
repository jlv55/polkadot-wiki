"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7827],{62313:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"learn/learn-guides-treasury","title":"Polkadot-JS Guides about the Treasury","description":"Polkadot-JS Guides about the Polkadot Treasury.","source":"@site/../docs/learn/learn-guides-treasury.md","sourceDirName":"learn","slug":"/learn-guides-treasury","permalink":"/docs/learn-guides-treasury","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-treasury.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1729847256000,"frontMatter":{"id":"learn-guides-treasury","title":"Polkadot-JS Guides about the Treasury","sidebar_label":"Treasury Guides","description":"Polkadot-JS Guides about the Polkadot Treasury.","keywords":["opengov","polkadot opengov","referenda","treasury","tipps","polkadot-js"],"slug":"../learn-guides-treasury"},"sidebar":"docs","previous":{"title":"Test OpenGov Referenda","permalink":"/docs/learn-guides-test-opengov-proposals"},"next":{"title":"Bounty Guides","permalink":"/docs/learn-guides-bounties"}}');var a=n(74848),t=n(28453),r=n(67141);const o={id:"learn-guides-treasury",title:"Polkadot-JS Guides about the Treasury",sidebar_label:"Treasury Guides",description:"Polkadot-JS Guides about the Polkadot Treasury.",keywords:["opengov","polkadot opengov","referenda","treasury","tipps","polkadot-js"],slug:"../learn-guides-treasury"},l=void 0,d={},c=[{value:"Creating a Treasury Proposal",id:"creating-a-treasury-proposal",level:2},{value:"Announcing the Proposal",id:"announcing-the-proposal",level:3},{value:"Creating a Treasury Proposal - Spend Local",id:"creating-a-treasury-proposal---spend-local",level:2},{value:"Submit Treasury Proposal Preimage",id:"submit-treasury-proposal-preimage",level:3},{value:"Submit a Treasury Track Referendum",id:"submit-a-treasury-track-referendum",level:3},{value:"Place a Decision Deposit for the Treasury Track Referendum",id:"place-a-decision-deposit-for-the-treasury-track-referendum",level:3},{value:"Creating a Multistage Payout Proposal with <code>validFrom</code>",id:"creating-a-multistage-payout-proposal-with-validfrom",level:2},{value:"Using <code>batch</code> for Multi-Spend Proposals",id:"using-batch-for-multi-spend-proposals",level:3},{value:"Using <code>validFrom</code> for a Milestone-Based Proposal",id:"using-validfrom-for-a-milestone-based-proposal",level:3},{value:"Creating a USDT Treasury Proposal - Spend (with AssetHub)",id:"creating-a-usdt-treasury-proposal---spend-with-assethub",level:2},{value:"Creating a Preimage",id:"creating-a-preimage",level:3},{value:"Specifying Asset Kind",id:"specifying-asset-kind",level:3},{value:"Specifying the Amount",id:"specifying-the-amount",level:3},{value:"Specifying the Beneficiary",id:"specifying-the-beneficiary",level:3},{value:"Specifying <code>validFrom</code> (optional)",id:"specifying-validfrom-optional",level:3},{value:"Manually Claiming Payouts",id:"manually-claiming-payouts",level:3},{value:"Proposing a &quot;Void&quot; for a Staged Proposal",id:"proposing-a-void-for-a-staged-proposal",level:3},{value:"Submit Treasury Proposal via Polkassembly",id:"submit-treasury-proposal-via-polkassembly",level:2},{value:"Requesting Tips from the Treasury",id:"requesting-tips-from-the-treasury",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the Polkadot-JS UI, you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,a.jsxs)(s.p,{children:["See ",(0,a.jsx)(s.a,{href:"/docs/learn-polkadot-opengov-treasury",children:"this page"})," to learn about the Polkadot Treasury."]}),"\n",(0,a.jsx)(s.h2,{id:"creating-a-treasury-proposal",children:"Creating a Treasury Proposal"}),"\n",(0,a.jsx)(s.p,{children:"Your proposal should address a problem, outline a goal, give a detailed account of how you will\nreach that goal, and include any ongoing maintenance needs. As much as possible, you should itemize\nthe tasks to be completed so fees can be evaluated and milestones can be followed. You can check the\nguidelines below:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Guidelines for a successful proposal on\n",(0,a.jsx)(s.a,{href:"https://docs.google.com/document/d/1IZykdp2cyQavcRyZd_dgNj5DcgxgZR6kAqGdcNARu1w",children:"Polkadot"})," and\n",(0,a.jsx)(s.a,{href:"https://docs.google.com/document/d/1CzEnurqwqLBOGrJI9CQORiGW9m6QyPOSshhzJdR57Pk",children:"Kusama"})]}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://docs.google.com/document/d/1O_84mXYFERCavmnJyxbIPKFkG0bVBySRjCVy-d-VKcc",children:"Treasury proposal template for Polkadot"})}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"announcing-the-proposal",children:"Announcing the Proposal"}),"\n",(0,a.jsxs)(s.p,{children:["To minimize storage on-chain, proposals don't contain contextual information. When a user submits a\nproposal, they will need to find an off-chain way to explain the proposal via\n",(0,a.jsx)(s.a,{href:"/docs/community",children:"community channels"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"Spreading the word about the proposal's explanation to the community is ultimately up to the\nproposer."}),"\n",(0,a.jsx)(s.admonition,{title:"Use Accounts with Verified On-Chain Identity for Treasury Proposals",type:"tip",children:(0,a.jsxs)(s.p,{children:["To ensure legitimacy, it is required that the account linked to the Treasury proposal has an\n",(0,a.jsx)(s.a,{href:"https://support.polkadot.network/support/solutions/articles/65000181981-how-to-set-and-clear-an-identity",children:"identity set"}),"\nand is\n",(0,a.jsx)(s.a,{href:"https://support.polkadot.network/support/solutions/articles/65000181990-how-to-request-and-cancel-identity-judgement",children:"verified by an on-chain registrar"}),"."]})}),"\n",(0,a.jsx)(s.h2,{id:"creating-a-treasury-proposal---spend-local",children:"Creating a Treasury Proposal - Spend Local"}),"\n",(0,a.jsxs)(s.admonition,{title:'"Spend" vs. "Spend Local"',type:"info",children:[(0,a.jsxs)(s.p,{children:["You may notice that the Treasury pallet contains two extrinsics - ",(0,a.jsx)(s.code,{children:"treasury.spend"})," and\n",(0,a.jsx)(s.code,{children:"treasury.spendLocal"}),". ",(0,a.jsx)(s.code,{children:"treasury.spendLocal"})," (formally called ",(0,a.jsx)(s.code,{children:"treasury.spend"}),") refers to a spend of\nDOT that is locally available, i.e., DOT from the relay chain's treasury account. ",(0,a.jsx)(s.code,{children:"spend"})," actually\nallows the caller to specify an asset other than DOT, or even assets in other locations, e.g.\n",(0,a.jsx)(s.a,{href:"/docs/glossary#asset-hub",children:"Asset Hub"}),"."]}),(0,a.jsxs)(s.p,{children:["Unlike ",(0,a.jsx)(s.code,{children:"treasury.spendLocal"}),", ",(0,a.jsx)(s.code,{children:"treasury.spend"})," is ",(0,a.jsx)(s.strong,{children:"not"})," bound by a spend period, and must be\nclaimed manually via the ",(0,a.jsx)(s.code,{children:"treasury.payout"})," extrinsic. ",(0,a.jsx)(s.code,{children:"treasuy.spendLocal"})," behavior remains\nunchanged."]})]}),"\n",(0,a.jsx)(s.h3,{id:"submit-treasury-proposal-preimage",children:"Submit Treasury Proposal Preimage"}),"\n",(0,a.jsxs)(s.p,{children:["The example below shows how to create a ",(0,a.jsx)(s.a,{href:"/docs/glossary#preimage",children:"preimage"})," for a\ntransaction that requests 100 DOT from Treasury."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Navigate to ",(0,a.jsx)(s.a,{href:"https://polkadot.js.org/apps/#/preimages",children:"Polkadot-JS UI > Governance > Preimages"}),"\nand then click on Add Preimage."]}),"\n",(0,a.jsx)(s.li,{children:"Select the account which will be used to submit the preimage."}),"\n",(0,a.jsxs)(s.li,{children:["Choose ",(0,a.jsx)(s.code,{children:"treasury"}),' pallet in the "propose" dropdown and the ',(0,a.jsx)(s.code,{children:"spendLocal(amount, beneficiary)"}),"call"]}),"\n",(0,a.jsx)(s.li,{children:"Enter the DOT amount."}),"\n",(0,a.jsx)(s.li,{children:"Enter the AccountID of the beneficiary (which has a verified on-chain identity)."}),"\n",(0,a.jsx)(s.li,{children:"Submit preimage"}),"\n",(0,a.jsx)(s.li,{children:"Sign and submit the transaction by paying the specified transaction fees."}),"\n"]}),"\n",(0,a.jsx)(s.admonition,{title:"Preimage Submission Deposit",type:"info",children:(0,a.jsx)(s.p,{children:"A deposit is required for the preimage to be stored on chain. The preimage deposit is proportional\nto the amount of information stored within the preimage. The deposit amount required for a preimage\nwith a treasury spend transaction is around 41 DOT (1.4 KSM on Kusama). Ensure you have enough\naccount balance to pay for the submission deposit and the transaction fees."})}),"\n",(0,a.jsx)(s.p,{children:"Here is the preimage requesting for 100 DOT."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Treasury Preimage",src:n(79087).A+"",width:"2148",height:"1191"})}),"\n",(0,a.jsx)(s.admonition,{title:"Balance entered is in Plancks",type:"info",children:(0,a.jsxs)(s.p,{children:["Polkadot JS UI is for developers and the UI takes input of the balance in\n",(0,a.jsx)(s.a,{href:"/docs/learn-DOT#the-planck-unit",children:"plancks"}),". DOT has 10 decimals, which is 10000000000 plancks per DOT."]})}),"\n",(0,a.jsx)(s.p,{children:"After successful submission of the preimage, it is displayed on Polkadot-JS UI > Governance >\nPreimages page. Every preimage is associated with a unique preimage hash (highlighted in a box in\nthe image below). Take a note of this preimage hash, which is required to submit a referendum."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Treasury Preimage Hash",src:n(39555).A+"",width:"2879",height:"453"})}),"\n",(0,a.jsx)(s.h3,{id:"submit-a-treasury-track-referendum",children:"Submit a Treasury Track Referendum"}),"\n",(0,a.jsx)(s.p,{children:"The example below shows how to submit a Treasury track referendum."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Navigate to ",(0,a.jsx)(s.a,{href:"https://polkadot.js.org/apps/#/referenda",children:"Polkadot-JS UI > Governance > Referenda"}),"\nand then click on Submit proposal."]}),"\n",(0,a.jsx)(s.li,{children:"Select the account which will be used to submit the proposal."}),"\n",(0,a.jsx)(s.li,{children:"Choose the appropriate submission track (The example below selected Small Spender track)."}),"\n",(0,a.jsx)(s.li,{children:"Enter the preimage hash of the treasury spend transaction.(If the preimage exists on-chain, the\npreimage length box is automatically populated)"}),"\n",(0,a.jsx)(s.li,{children:"Click on Submit proposal."}),"\n",(0,a.jsx)(s.li,{children:"Sign and submit the transaction."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Submit Treasury Proposal",src:n(44751).A+"",width:"2141",height:"1238"})}),"\n",(0,a.jsxs)(s.p,{children:["Once your submission is executed, your referendum will appear under your chosen track on the\nPolkadot-JS UI ",(0,a.jsx)(s.a,{href:"https://polkadot.js.org/apps/#/referenda",children:"referenda page"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"place-a-decision-deposit-for-the-treasury-track-referendum",children:"Place a Decision Deposit for the Treasury Track Referendum"}),"\n",(0,a.jsxs)(s.p,{children:["For the referendum to move from preparing phase to the deciding phase, a decision deposit needs to\nbe placed. The decision deposit values for each individual\n",(0,a.jsx)(s.a,{href:"./learn-polkadot-opengov-treasury#treasury-tracks",children:"Treasury Tracks"})," are listed in a section above\nin this document."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Submit Treasury Proposal Decision Deposit",src:n(52540).A+"",width:"2133",height:"168"})}),"\n",(0,a.jsxs)(s.p,{children:["The preimage and decision deposits\n",(0,a.jsx)(s.a,{href:"/docs/learn-guides-polkadot-opengov#claiming-the-preimage-and-decision-deposits",children:"can be claimed once the referendum ends"}),"."]}),"\n",(0,a.jsxs)(s.h2,{id:"creating-a-multistage-payout-proposal-with-validfrom",children:["Creating a Multistage Payout Proposal with ",(0,a.jsx)(s.code,{children:"validFrom"})]}),"\n",(0,a.jsx)(s.p,{children:"Staged proposals are similar to a tranche or milestone-based funding model; instead of all spends\nbeing paid simultaneously, each portion is redeemable at a certain block height. This is done by\nspecifying each milestone, set at its respective amount and block height at which it becomes\nredeemable."}),"\n",(0,a.jsx)(s.p,{children:'For example, take the following "staged" proposal, which has three milestones, each at 100 DOT, and\nis redeemable at the following block heights. Usually, block heights correspond to a date in the\nfuture:'}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"100 DOT paid out at block height 1000"}),"\n",(0,a.jsx)(s.li,{children:"200 DOT paid out at block height 2000"}),"\n",(0,a.jsx)(s.li,{children:"500 DOT paid out at block height 4000"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Governance can also propose to ",(0,a.jsx)(s.strong,{children:"void"})," a staged proposal before it has completed all of its\npayouts."]}),"\n",(0,a.jsx)(s.admonition,{title:"Calculating dates from block heights",type:"info",children:(0,a.jsx)(s.p,{children:"Although not the most accurate form of measurement, block heights can be used to correspond to\ncertain dates in the future."})}),"\n",(0,a.jsxs)(s.h3,{id:"using-batch-for-multi-spend-proposals",children:["Using ",(0,a.jsx)(s.code,{children:"batch"})," for Multi-Spend Proposals"]}),"\n",(0,a.jsxs)(s.p,{children:["Using the Utility pallet, one can batch multiple ",(0,a.jsx)(s.code,{children:"treasury.spend"})," calls together. Each of these\ncalls can have its own ",(0,a.jsx)(s.code,{children:"validFrom"})," block height, which allows for scenarios such as the above to be\npossible."]}),"\n",(0,a.jsx)(s.admonition,{title:"Multistage payout proposal example",type:"tip",children:(0,a.jsxs)(s.p,{children:["For reference on how to create a multistage payout proposal, please check\n",(0,a.jsx)(s.a,{href:"https://kusama.subsquare.io/referenda/382?tab=call",children:"Referendum 382"})," on Kusama."]})}),"\n",(0,a.jsxs)(s.h3,{id:"using-validfrom-for-a-milestone-based-proposal",children:["Using ",(0,a.jsx)(s.code,{children:"validFrom"})," for a Milestone-Based Proposal"]}),"\n",(0,a.jsxs)(s.p,{children:["Once each spend is defined within the batched call, the ",(0,a.jsx)(s.code,{children:"validFrom"}),' field can be utilized to specify\nthe "date", or block height, at which each spend will be executed.']}),"\n",(0,a.jsx)(s.admonition,{title:"Treasury Spends have to be claimed manually. Spends can expire!",type:"info",children:(0,a.jsxs)(s.p,{children:["Keep in mind that once the ",(0,a.jsx)(s.code,{children:"validFrom"})," block height has been reached, you will have to claim the\nspend within 30 days. Check the claiming process for treasury spends\n",(0,a.jsx)(s.a,{href:"#manually-claiming-payouts",children:"here"})]})}),"\n",(0,a.jsx)(s.h2,{id:"creating-a-usdt-treasury-proposal---spend-with-assethub",children:"Creating a USDT Treasury Proposal - Spend (with AssetHub)"}),"\n",(0,a.jsxs)(s.p,{children:["The following tutorial mostly goes over how to utilize the ",(0,a.jsx)(s.code,{children:"spend"})," extrinsic, which, unlike\n",(0,a.jsx)(s.code,{children:"spendLocal"}),", is able to specify assets besides the native asset in other locations, such as\n",(0,a.jsx)(s.a,{href:"/docs/glossary#asset-hub",children:"Asset Hub"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"creating-a-preimage",children:"Creating a Preimage"}),"\n",(0,a.jsxs)(s.p,{children:["The example below shows how to create a ",(0,a.jsx)(s.a,{href:"../general/glossary#preimage",children:"preimage"})," for a transaction\nthat requests 100 USDT from AssetHub."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Navigate to ",(0,a.jsx)(s.a,{href:"https://polkadot.js.org/apps/#/preimages",children:"Polkadot-JS UI > Governance > Referenda"}),"\nand then click on Add Preimage."]}),"\n",(0,a.jsx)(s.li,{children:"Select the account to submit the preimage."}),"\n",(0,a.jsxs)(s.li,{children:["Choose the ",(0,a.jsx)(s.code,{children:"treasury"}),' pallet in the "propose" dropdown and the\n',(0,a.jsx)(s.code,{children:"spend(assetKind, amount, beneficiary, validFrom)"})," call."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Now, let's go through each field one-by-one and fill them in accordingly:"}),"\n",(0,a.jsx)(s.h3,{id:"specifying-asset-kind",children:"Specifying Asset Kind"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"assetKind"})," refers to the asset to be used, specified via XCM. In short, we need to be able to find:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"The relative location of the asset, and"}),"\n",(0,a.jsx)(s.li,{children:"How it is identified within this location."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"For this example, we are using USDT, which from the perspective of the relay chain would be:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"Parachain 1000 (AssetHub) > AssetId (Concrete) > PalletInstance 50 > General Index 1984"})}),"\n",(0,a.jsxs)(s.p,{children:["First, we specify the location - in this case, Asset Hub (parachain 1,000). ",(0,a.jsx)(s.code,{children:"PalletInstance 50"}),"\nrefers to the Assets pallet instance on Asset Hub. The general index is ",(0,a.jsx)(s.code,{children:"1984"}),", which is the ID of\nUSDT in this instance of the Assets pallet."]}),"\n",(0,a.jsxs)(s.admonition,{title:"Bug on Polkadot-JS UI",type:"caution",children:[(0,a.jsxs)(s.p,{children:["As the Polkadot-JS UI is interpreting the general index in DOT, it multiplies the entered values\nwith ",(0,a.jsx)(s.code,{children:"10000000000"})," (As DOT token has 10 decimals) and places it in the ",(0,a.jsx)(s.code,{children:"u128"})," argument. As we would\nlike to have ",(0,a.jsx)(s.code,{children:"1984"})," as the input argument, we can offset this UI induced error by entering\n",(0,a.jsx)(s.code,{children:"0.0000001984"}),"."]}),(0,a.jsxs)(s.p,{children:["The issue on Polkadot-JS repo can be tracked\n",(0,a.jsx)(s.a,{href:"https://github.com/polkadot-js/apps/issues/10430",children:"here"}),"."]})]}),"\n",(0,a.jsxs)(s.p,{children:["Here is how the final ",(0,a.jsx)(s.code,{children:"assetKind"})," field should look:"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Asset Kind",src:n(44855).A+"",width:"1564",height:"1316"})}),"\n",(0,a.jsx)(s.h3,{id:"specifying-the-amount",children:"Specifying the Amount"}),"\n",(0,a.jsxs)(s.p,{children:["The amount should be simply the amount of USDT, where each ",(0,a.jsx)(s.code,{children:"1"})," USDT is ",(0,a.jsx)(s.code,{children:"1000000"}),". Because we are\nasking for 100 USDT, we put ",(0,a.jsx)(s.code,{children:"100000000"})," as the input for the amount."]}),"\n",(0,a.jsxs)(s.admonition,{title:"Bug on Polkadot-JS UI",type:"caution",children:[(0,a.jsxs)(s.p,{children:["As the Polkadot-JS UI is interpreting the asset balance in DOT, it multiplies the entered values\nwith ",(0,a.jsx)(s.code,{children:"10000000000"})," (As DOT token has 10 decimals) and places it in the ",(0,a.jsx)(s.code,{children:"u128"})," argument. As we would\nlike to have ",(0,a.jsx)(s.code,{children:"100000000"})," as the input argument, we can offset this UI induced error by entering\n",(0,a.jsx)(s.code,{children:"0.01"})," for this particular example where we like to input 100 USDT."]}),(0,a.jsxs)(s.p,{children:["The issue on Polkadot-JS repo can be tracked\n",(0,a.jsx)(s.a,{href:"https://github.com/polkadot-js/apps/issues/10430",children:"here"}),"."]})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Asset Value, Beneficiary and ValidFrom",src:n(22192).A+"",width:"1591",height:"1279"})}),"\n",(0,a.jsx)(s.h3,{id:"specifying-the-beneficiary",children:"Specifying the Beneficiary"}),"\n",(0,a.jsxs)(s.p,{children:["The beneficiary account will be one on Asset Hub. For this reason, the XCM junction must be\nspecified as follows, with one junction (",(0,a.jsx)(s.code,{children:"X1"}),") and the beneficiary account (",(0,a.jsx)(s.code,{children:"AccountId32"}),"), which is\nan account address on the chain."]}),"\n",(0,a.jsxs)(s.h3,{id:"specifying-validfrom-optional",children:["Specifying ",(0,a.jsx)(s.code,{children:"validFrom"})," (optional)"]}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"validFrom"})," field is optional, and refers to the block height of the relay chain upon which the\npayout can be issued. If the ",(0,a.jsx)(s.code,{children:"validFrom"})," parameter is not set, the spend can be paid out immediately\nafter approval. For more information on this field, refer to the\n",(0,a.jsx)(s.a,{href:"#creating-a-staged-proposal-with-validfrom",children:"guide below"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"The final call should look like the following, where we:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Specify our asset as ",(0,a.jsx)(s.strong,{children:"USDT"})," on ",(0,a.jsx)(s.strong,{children:"Asset Hub"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Specify the ",(0,a.jsx)(s.strong,{children:"amount"})," of ",(0,a.jsx)(s.strong,{children:"USDT"})," (100)."]}),"\n",(0,a.jsx)(s.li,{children:"Specify the beneficiary address."}),"\n",(0,a.jsxs)(s.li,{children:["If applicable, use the ",(0,a.jsx)(s.code,{children:"validFrom"})," field to specify a block number upon which the payout becomes\nvalid."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"The next steps are to:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Copy the preimage (and its length)"}),"\n",(0,a.jsx)(s.li,{children:"Sign and submit the preimage"}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Once this is finished, one may submit a proposal\n",(0,a.jsx)(s.a,{href:"#submit-a-treasury-track-referendum",children:"as stated above"}),". Keep in mind one will also need to\n",(0,a.jsx)(s.a,{href:"#place-a-decision-deposit-for-the-treasury-track-referendum",children:"provide the decision deposit as well"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"manually-claiming-payouts",children:"Manually Claiming Payouts"}),"\n",(0,a.jsxs)(s.p,{children:["In order to claim the spend, you must manually call the ",(0,a.jsx)(s.code,{children:"treasury.payout"})," extrinsic via a ",(0,a.jsx)(s.code,{children:"Signed"}),"\norigin. The ",(0,a.jsx)(s.code,{children:"spendID"})," for the pending payout can be queried on-chain through Polkadot-JS UI >\nDeveloper > Chain State > Storage > treasury > spends and unselect the include option and then click\non the plus button to the right."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"payout",src:n(88195).A+"",width:"2768",height:"1370"})}),"\n",(0,a.jsxs)(s.p,{children:["From the list of spends, find the ",(0,a.jsx)(s.code,{children:"spendID"})," of your respetive payout and issue the payout extrinsic."]}),"\n",(0,a.jsx)(s.admonition,{title:"payout example",type:"tip",children:(0,a.jsxs)(s.p,{children:["To claim the first payout of ",(0,a.jsx)(s.a,{href:"https://kusama.subsquare.io/referenda/382?tab=call",children:"Referendum 382"})," on\nKusama, ",(0,a.jsx)(s.a,{href:"https://kusama.subscan.io/extrinsic/23061444-2",children:"this payout extrinsic"})," was issued. After\nissuing the payout extrinsic, the status of the payout changes from ",(0,a.jsx)(s.code,{children:"pending"})," to ",(0,a.jsx)(s.code,{children:"Attempted"})," with a\nreference to a payment ID. If the payout is successful, the balance on Asset Hub should be updated.\n",(0,a.jsx)(s.a,{href:"https://assethub-kusama.subscan.io/extrinsic/6923602-0",children:"Here"})," is the transfer extrinsic on Asset\nHub for the first payout of ",(0,a.jsx)(s.a,{href:"https://kusama.subscan.io/referenda_v2/382",children:"Referendum 382"}),"."]})}),"\n",(0,a.jsxs)(s.p,{children:["To clear the on-chain storage of a successful or expired spend, Treasury pallet's ",(0,a.jsx)(s.code,{children:"checkStatus"}),"\nextrinsic can be used. The transaction fees paid for issuing this extrinsic will be refunded."]}),"\n",(0,a.jsx)(s.h3,{id:"proposing-a-void-for-a-staged-proposal",children:'Proposing a "Void" for a Staged Proposal'}),"\n",(0,a.jsxs)(s.p,{children:["If a proposal that hasn't completed all of its spends needs to be voided, the ",(0,a.jsx)(s.code,{children:"treasury.voidSpend"}),"\nextrinsic can be utilized via a governance proposal."]}),"\n",(0,a.jsx)(s.admonition,{title:"Example proposal - Voiding a Treasury Spend",type:"tip",children:(0,a.jsxs)(s.p,{children:["For reference, check the referenda on Kusama that\n",(0,a.jsx)(s.a,{href:"https://kusama.subsquare.io/referenda/391",children:"tests VoidSpend functionality for Treasury Payouts"}),".\nThrough this referenda, a treasury spend was\n",(0,a.jsx)(s.a,{href:"https://kusama.subscan.io/event?page=1&time_dimension=date&module=treasury&event_id=assetspendvoided",children:"successfully voided"}),"."]})}),"\n",(0,a.jsx)(s.h2,{id:"submit-treasury-proposal-via-polkassembly",children:"Submit Treasury Proposal via Polkassembly"}),"\n",(0,a.jsxs)(s.p,{children:["To submit a treasury track referendum via ",(0,a.jsx)(s.a,{href:"https://polkadot.polkassembly.io/opengov",children:"Polkassembly"}),"\nclick on the FAB button in the bottom right corner. Then,"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:'Click on "Create Treasury Proposal" and choose an address for the proposer.'}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"After choosing an address, you will enter a three-stage guideline:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Write a proposal: you can add a detailed description for the proposal, which will be stored on\nPolkassembly. Alternatively, you can link an existing discussion post."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"polkassembly-write-proposal",src:n(14879).A+"",width:"2130",height:"1596"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Create a preimage: an existing preimage can be linked, or a new one can be created. To create a\npreimage, add the beneficiary address and the token amount. The track will be auto-selected and\nthe user can proceed with the creation of a preimage."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"polkassembly-create-preimage",src:n(94664).A+"",width:"2154",height:"1598"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Create a proposal: final confirmation about the proposal creation. The description of the\nproposal and the preimage are automatically linked to the proposal."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"requesting-tips-from-the-treasury",children:"Requesting Tips from the Treasury"}),"\n",(0,a.jsxs)(s.p,{children:["To request a tip funded by the treasury, you can follow the above steps for\n",(0,a.jsx)(s.a,{href:"#creating-a-treasury-proposal",children:"creating a treasury proposal"})," but instead of submitting the proposal\nto the ",(0,a.jsx)(s.code,{children:"32 / Small Spender"})," track, you will need to submit it to the ",(0,a.jsx)(s.code,{children:"30 / Small Tipper"})," or\n",(0,a.jsx)(s.code,{children:"31 / Big Tipper"})," tracks depending on the number of tokens to be requested."]}),"\n",(0,a.jsx)(s.p,{children:"Briefly, you will need to:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Create a preimage using the ",(0,a.jsx)(s.code,{children:"treasury.spendLocal"})," extrinsic and specifying the number of tokens\nand the beneficiary of the tip"]}),"\n",(0,a.jsxs)(s.li,{children:["Submit a proposal to the right track (i.e. ",(0,a.jsx)(s.code,{children:"30"})," or ",(0,a.jsx)(s.code,{children:"31"}),") using the preimage hash"]}),"\n",(0,a.jsxs)(s.li,{children:["Once you started the referendum go to ",(0,a.jsx)(s.a,{href:"https://polkassembly.io/",children:"Polkassembly"}),", log in with the\nproposer account and edit the referendum details"]}),"\n",(0,a.jsxs)(s.li,{children:["Notify ",(0,a.jsx)(s.a,{href:"https://matrix.to/#/#Polkadot-Direction:parity.io",children:"the Polkadot Direction Element Channel"}),"\nor ",(0,a.jsx)(s.a,{href:"https://matrix.to/#/#Polkadot-Direction:parity.io",children:"the Kusama Direction Element Channel"})," about\nyour referendum"]}),"\n",(0,a.jsxs)(s.li,{children:["Place the decision deposit\n",(0,a.jsx)(s.a,{href:"/docs/chain-state-values#opengov-referendum-timeout",children:"before the timeout"})]}),"\n",(0,a.jsxs)(s.li,{children:["Once the referendum ends you can\n",(0,a.jsx)(s.a,{href:"/docs/learn-guides-polkadot-opengov#claiming-the-preimage-and-decision-deposits",children:"claim the preimage and decision deposits back"})]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},67141:(e,s,n)=>{n.d(s,{A:()=>t});var i=n(96540),a=n(74848);const t=function(e){var s,n=e.message,t=(0,i.useState)(!0),r=t[0],o=t[1];return(0,a.jsx)(a.Fragment,{children:r&&(0,a.jsxs)("div",{className:"message-box",children:[(0,a.jsx)("button",{className:"close-button",onClick:function(){o(!1)},children:"\u2716 "}),(0,a.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(s=n,s.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},22192:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/spend-amount-account-validfrom-temp-51145f395b6786e783600e3665bc7fab.png"},44855:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/spend-usdt-assethub-temp-4182c6d400d00e1c4d8e94efc96dadcf.png"},94664:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/polkassembly-create-preimage-7396a8ce796d0f0dcad30d3edced8618.png"},14879:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/polkassembly-write-proposal-a3ce8ab9303111f6003ac8103ba29507.png"},79087:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/OpenGov-Treasury-Preimage-SpendLocal-693c955b1e3e27bb6c98a6aad4d1b697.png"},44751:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/submit-proposal-treasury-3948a231c4f3162a8680ad052af9e903.png"},88195:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/treasury-multistage-payout-spend-id-54e73a1e8829cb911284ad15654d5661.png"},39555:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/treasury-preimage-hash-05bb427d21d3ecf7d5e38418a0a0f4ed.png"},52540:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/treasury-proposal-decision-deposit-849d27481ba0134acf743f7474d8f6a4.png"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var i=n(96540);const a={},t=i.createContext(a);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);