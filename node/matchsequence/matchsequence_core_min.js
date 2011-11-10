MatchSequenceNode.prototype=new Node;MatchSequenceNode.prototype.constructor=MatchSequenceNode;MatchSequenceNode.prototype.parent=Node.prototype;MatchSequenceNode.authoringToolName="Match & Sequence";MatchSequenceNode.authoringToolDescription="Students drag and drop choices into boxes";function MatchSequenceNode(a,c){this.view=c;this.type=a;this.prevWorkNodeIds=[]}MatchSequenceNode.prototype.parseDataJSONObj=function(a){return MSSTATE.prototype.parseDataJSONObj(a)};
MatchSequenceNode.prototype.onExit=function(){};MatchSequenceNode.prototype.getHTMLContentTemplate=function(){return createContent("node/matchsequence/matchsequence.html")};NodeFactory.addNode("MatchSequenceNode",MatchSequenceNode);typeof eventManager!="undefined"&&eventManager.fire("scriptLoaded","vle/node/matchsequence/MatchSequenceNode.js");View.prototype.matchsequenceDispatcher=function(a,c,b){a=="msUpdatePrompt"?b.MatchSequenceNode.updatePrompt():a=="msUpdateOrdered"?b.MatchSequenceNode.updateOrdered(c[0]):a=="msAddContainer"?b.MatchSequenceNode.addContainer():a=="msAddChoice"?b.MatchSequenceNode.addChoice():a=="msRemoveChoice"?b.MatchSequenceNode.removeChoice():a=="msRemoveContainer"?b.MatchSequenceNode.removeContainer():a=="msEditFeedback"?b.MatchSequenceNode.editFeedback():a=="msShuffleChanged"?b.MatchSequenceNode.shuffleChanged():
a=="msContainerSelected"?b.MatchSequenceNode.containerSelected(c[0]):a=="msContainerTextUpdated"?b.MatchSequenceNode.containerTextUpdated(c[0]):a=="msChoiceSelected"?b.MatchSequenceNode.choiceSelected(c[0],c[1]):a=="msChoiceTextUpdated"?b.MatchSequenceNode.choiceTextUpdated(c[0]):a=="msOrderUpdated"?b.MatchSequenceNode.orderUpdated(c[0]):a=="msHideFeedback"?b.MatchSequenceNode.hideFeedback():a=="msEditIndividualFeedback"?b.MatchSequenceNode.editIndividualFeedback(c[0],c[1]):a=="msSaveFeedback"?b.MatchSequenceNode.saveFeedback():
a=="msUpdateDisplayLayout"?b.MatchSequenceNode.updateDisplayLayout(c[0]):a=="msUpdateLogLevel"?b.MatchSequenceNode.updateLogLevel(c[0]):a=="msUpdateShowFeedback"&&b.MatchSequenceNode.updateShowFeedback(c[0])};
for(var events=["msUpdatePrompt","msUpdateOrdered","msAddContainer","msAddChoice","msRemoveChoice","msRemoveContainer","msEditFeedback","msShuffleChanged","msContainerSelected","msContainerTextUpdated","msChoiceSelected","msChoiceTextUpdated","msOrderUpdated","msHideFeedback","msEditIndividualFeedback","msSaveFeedback","msUpdateDisplayLayout","msUpdateLogLevel","msUpdateShowFeedback"],x=0;x<events.length;x++)componentloader.addEvent(events[x],"matchsequenceDispatcher");
typeof eventManager!="undefined"&&eventManager.fire("scriptLoaded","vle/node/matchsequence/matchSequenceEvents.js");
if(typeof eventManager != 'undefined'){eventManager.fire('scriptLoaded', 'vle/node/matchsequence/matchsequence_core_min.js');}
